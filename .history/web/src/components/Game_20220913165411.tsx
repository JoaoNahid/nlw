import React from 'react';

interface GameProps{
  img: string,
  title: string,
  adCount: string
}

function Game(props: GameProps) {
  return (
    <a href="" className='relative'>
      <img src={props.img} alt="" />

      <div className='w-full pt-16 px-4 pb-4 text-left absolute bottom-0 left-0'>
        <strong className='mb-1 text-white font-bold block'>{props.title}</strong>
        <span className='text-zinc-300 text-sm block'>{props.adCount} anúncios</span>
      </div>
    </a>
  );
}

export default Game;