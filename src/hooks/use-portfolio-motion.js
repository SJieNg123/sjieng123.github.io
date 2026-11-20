import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function usePortfolioMotion(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current
    const media = gsap.matchMedia()

    media.add({
      desktop: '(min-width: 721px) and (prefers-reduced-motion: no-preference)',
      mobile: '(max-width: 720px) and (prefers-reduced-motion: no-preference)'
    }, context => {
      const desktop = context.conditions.desktop
      const distance = desktop ? 28 : 16
      const duration = desktop ? 0.7 : 0.5
      const select = gsap.utils.selector(root)
      const entrances = []

      // Each group starts when it reaches the viewport, including on narrow screens.
      const entrance = (element, animate) => {
        const timeline = gsap.timeline({
          defaults: { duration, ease: 'power3.out' },
          scrollTrigger: {
            trigger: element,
            start: element.matches('.site-footer') ? 'top bottom' : 'top 88%',
            once: true
          }
        })
        animate(timeline, gsap.utils.selector(element))
        entrances.push({ element, timeline })
      }

      const reveal = (selector, childSelector) => {
        select(selector).forEach(element => {
          entrance(element, (timeline, children) => {
            timeline.from(childSelector ? children(childSelector) : element, {
              y: distance,
              opacity: 0,
              stagger: 0.09
            })
          })
        })
      }

      // 1. Introduction, followed by the four geometric building blocks.
      reveal('.hero-copy', ':scope > :not(.hero-name)')

      // The name assembles from horizontal slices that slide in from alternating sides.
      select('.hero-name').forEach(element => {
        const base = element.querySelector('.hero-name-base')
        const slices = element.querySelectorAll('.hero-slice')
        const offset = desktop ? 120 : 60

        entrance(element, timeline => {
          timeline.set(base, { autoAlpha: 0 })
            .set(element.querySelector('.hero-slices'), { autoAlpha: 1 })
            .from(slices, {
              x: index => (index % 2 === 0 ? -1 : 1) * offset * (1 - index * 0.08),
              opacity: 0,
              duration: desktop ? 0.9 : 0.7,
              ease: 'power4.out',
              stagger: 0.06
            })
            .set(base, { autoAlpha: 1 })
            .set(element.querySelector('.hero-slices'), { autoAlpha: 0 })
        })
      })
      select('.hero-art').forEach(element => {
        // Every few seconds, each shape moves one quadrant clockwise and turns 90°.
        // Quadrant centres in SVG units, clockwise from top left.
        const centres = [[130, 130], [390, 130], [390, 390], [130, 390]]
        const slots = Array.from(element.querySelectorAll('.geometry-slot'))
        const startSlot = slots.map(slot => Number(slot.dataset.slot))
        const offset = (index, step, axis) =>
          centres[(startSlot[index] + step) % 4][axis] - centres[startSlot[index]][axis]

        const interval = 3
        const swap = gsap.timeline({ paused: true, repeat: -1 })
        for (let step = 1; step <= 4; step++) {
          swap.to(slots, {
            x: index => offset(index, step, 0),
            y: index => offset(index, step, 1),
            rotation: step * 90,
            transformOrigin: '50% 50%',
            duration: 0.7,
            ease: 'power3.inOut'
          }, step * interval - 0.7)
        }
        // A full turn ends where it started, so the repeat is seamless.
        swap.set(slots, { rotation: 0 }, 4 * interval)

        // Start after the entrance, and only run while the art is on screen.
        let started = false
        ScrollTrigger.create({
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          onToggle: self => {
            if (started) self.isActive ? swap.resume() : swap.pause()
          }
        })

        entrance(element, (timeline, children) => {
          timeline.eventCallback('onComplete', () => {
            started = true
            swap.play()
          })
          const grid = children('.art-grid')[0]
          const length = grid.getTotalLength()
          timeline.from(children('.art-caption'), { opacity: 0, y: 10, duration: 0.4 })
            .from(grid, {
              strokeDasharray: length,
              strokeDashoffset: length,
              duration: 0.8
            }, 0)
            .from(children('.geometry-shape'), {
              scale: 0.72,
              rotation: index => index % 2 === 0 ? -10 : 10,
              y: distance,
              opacity: 0,
              transformOrigin: '50% 50%',
              stagger: 0.12,
              duration: desktop ? 0.9 : 0.65
            }, 0.12)
            .from(children('.art-legend > span'), {
              y: 8,
              opacity: 0,
              stagger: 0.08,
              duration: 0.4
            }, 0.55)
        })
      })
      reveal('.hero-footnote')

      // 2. Project poster and its details have independent viewport triggers.
      reveal('.section-heading', ':scope > *')
      select('.project-poster').forEach(element => {
        entrance(element, (timeline, children) => {
          timeline.from(element, { y: distance, opacity: 0, scale: 0.97 })
            .from(children('.poster-type'), { y: distance, opacity: 0 }, 0.12)
            .from(children('.poster-shapes > span'), {
              scale: 0,
              transformOrigin: '50% 100%',
              stagger: 0.1,
              ease: 'back.out(1.2)'
            }, 0.22)
        })
      })
      reveal('.project-copy', ':scope > *')

      // 3. Collaboration and contributions enter independently on small screens.
      reveal('.experience-company', ':scope > *')
      reveal('.experience-project', '.experience-index, .experience-project-content > *')

      // 4. Research remains readable as each row enters the screen.
      reveal('.research-intro', '.eyebrow, h2, p:not(.eyebrow)')
      reveal('.research-list > li', ':scope > *')
      select('.research-mark').forEach(element => {
        entrance(element, (timeline, children) => {
          timeline.from(children('span'), {
            x: index => index === 0 ? -12 : 12,
            opacity: 0,
            scale: 0.8,
            stagger: 0.12
          })
        })
      })

      // 5. Toolkit groups build in reading order on desktop and mobile.
      select('.toolkit-group').forEach((element, index) => {
        entrance(element, (timeline, children) => {
          timeline.from(children('.toolkit-shape'), {
            delay: desktop ? index * 0.12 : 0,
            scale: 0,
            rotation: -35,
            ease: 'back.out(1.4)'
          })
            .from(children('h3, li'), { y: 14, opacity: 0, stagger: 0.07 }, 0.12)
        })
      })

      // 6. Contact finishes the sequence with a small directional gesture.
      reveal('.contact-copy', ':scope > *')
      select('.contact-art').forEach(element => {
        entrance(element, (timeline, children) => {
          timeline.from(children('span'), { scale: 0, transformOrigin: '50% 50%' })
            .from(children('svg'), { x: -12, y: 12, opacity: 0 }, 0.15)
        })
      })
      reveal('.social-links', 'a')
      reveal('.site-footer', ':scope > *')

      // Keyboard focus must never wait for a visual entrance to finish.
      const showFocusedContent = event => {
        entrances.forEach(({ element, timeline }) => {
          if (element.contains(event.target)) timeline.progress(1)
        })
      }
      root.addEventListener('focusin', showFocusedContent)

      return () => root.removeEventListener('focusin', showFocusedContent)
    }, root)

    // Link feedback uses its own timelines so it never interrupts section reveals.
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const cleanups = Array.from(root.querySelectorAll('a[href]'), link => {
        let hovered = false
        const arrow = link.querySelector(':scope > svg')
        const timeline = gsap.timeline({
          paused: true,
          defaults: { duration: 0.3, ease: 'power2.out' }
        }).fromTo(link, { '--link-progress': 0 }, { '--link-progress': 1 })

        if (arrow) {
          const down = arrow.classList.contains('lucide-arrow-down')
          const up = arrow.classList.contains('lucide-arrow-up')
          timeline.to(arrow, { x: down || up ? 0 : 3, y: down ? 3 : -3 }, 0)
        }

        const update = () => {
          if (hovered || link.matches(':focus-visible')) timeline.play()
          else timeline.reverse()
        }
        const enter = event => {
          if (event.pointerType === 'touch') return
          hovered = true
          update()
        }
        const leave = () => {
          hovered = false
          update()
        }
        const blur = () => {
          if (!hovered) timeline.reverse()
        }

        link.addEventListener('pointerenter', enter)
        link.addEventListener('pointerleave', leave)
        link.addEventListener('pointercancel', leave)
        link.addEventListener('focus', update)
        link.addEventListener('blur', blur)

        return () => {
          link.removeEventListener('pointerenter', enter)
          link.removeEventListener('pointerleave', leave)
          link.removeEventListener('pointercancel', leave)
          link.removeEventListener('focus', update)
          link.removeEventListener('blur', blur)
        }
      })

      return () => cleanups.forEach(cleanup => cleanup())
    }, root)

    // Hovering the name briefly knocks its slices out of line, then settles them.
    media.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const name = root.querySelector('.hero-name')
      if (!name) return undefined
      const base = name.querySelector('.hero-name-base')
      const layer = name.querySelector('.hero-slices')
      const slices = name.querySelectorAll('.hero-slice')
      let glitch = null

      const enter = () => {
        // Wait for the entrance to finish, and never stack two glitches.
        if (gsap.getProperty(base, 'opacity') < 1 || glitch?.isActive()) return
        glitch = gsap.timeline({ defaults: { ease: 'power2.out' } })
          .set(base, { autoAlpha: 0 })
          .set(layer, { autoAlpha: 1 })
          .to(slices, {
            x: index => (index % 2 === 0 ? -1 : 1) * gsap.utils.random(6, 18),
            duration: 0.12,
            stagger: 0.02
          })
          .to(slices, { x: 0, duration: 0.5, ease: 'elastic.out(1, 0.55)', stagger: 0.02 })
          .set(base, { autoAlpha: 1 })
          .set(layer, { autoAlpha: 0 })
      }

      name.addEventListener('pointerenter', enter)
      return () => name.removeEventListener('pointerenter', enter)
    }, root)

    // Reverts transforms and removes triggers on unmount, Strict Mode replay,
    // breakpoint changes, and when reduced motion is enabled.
    return () => media.revert()
  }, [rootRef])
}
