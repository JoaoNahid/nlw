import './styles/main.css';
import Game from './components/Game';

import logoImg from './assets/img/Logo.svg'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-16">
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui!
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        
        <Game img="/image1.png" title="League of Legends" adCount="4" />

        <a href="">
          <img src="/image2.png" alt="" />
        </a>

        <a href="">
          <img src="/image3.png" alt="" />
        </a>

        <a href="">
          <img src="/image7.png" alt="" />
        </a>

        <a href="">
          <img src="/image5.png" alt="" />
        </a>
        <a href="">
          <img src="/image6.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default App
