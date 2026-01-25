/**
 * Kirby Component
 * CSS art design from: https://www.pyxofy.com/css-art-how-to-make-a-game-character-kirby/
 * Original design by Pyxofy
 */
import React from 'react';
import '../styles/kirby.css';

const Kirby = () => {
  return (
    <div className="kirby-wrapper">
      <div className="kirby-container">
        <div className="character">
          <div className="left-arm"></div>
          <div className="right-foot"></div>
          <div className="body"></div>
          <div className="cheek-mark"></div>
          <div className="right-arm"></div>
          <div className="right-eye"></div>
          <div className="left-eye"></div>
          <div className="mouth"></div>
          <div className="left-foot"></div>
        </div>
      </div>
    </div>
  );
};

export default Kirby;
