import './styles/main.css';
import Game from './components/Game';

import logoImg from './assets/img/Logo.svg'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-16">
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-10'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui!
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        
        <Game img="/image1.png" title="League of Legends" adCount="6" />
        <Game img="/image2.png" title="Dota 2" adCount="4" />
        <Game img="/image3.png" title="Counter Strike" adCount="13" />
        <Game img="/image7.png" title="WOW" adCount="1" />
        <Game img="/image5.png" title="Apex" adCount="3" />
        <Game img="/image6.png" title="Fortnite" adCount="7" />

      </div>

      <div className='flex justify-between items-center py-6 px-8 bg-[#2A2634] self-stretch mt-8 rounded-l'>
        <div>
          <h2>Não encontrou seu duo?</h2>
          <span>Publique um anúncio para encontrar novos players!</span>
        </div>
        <button>
          Publicar anúncio
        </button>
      </div>
    </div>
  )
}

export default App
