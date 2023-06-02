import React from 'react'
import Player from '../scripts/Player';

export default function GameboardDisplay({mode}) {

  const player = Player();
  const computer = Player();

  const onClickGridSquare = () => {
    // player.gameboard.receiveattack
  }

  const cols = [];
  const rows = [];

  for (let i = 0; i < 10; i++) {
    cols.push(
      <div key={i} className='gridSquare'>{i}</div>
    )
  }

  for (let i = 0; i < 10; i++) {
    rows.push(
      <div key={i} className='gridRow'>{cols}</div>
    )
  }

  return (
    <div>
      GameboardDisplay
      {rows}
    </div>
  )
}
