import './styles/main.css';

import logoImg from './assets/img/Logo.svg'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-16">
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui!
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative'>
          <img src="/image1.png" alt="" />

          <div className='pt-8 py-2 pb-4 text-left'>
            <h4 className='mb-[4px] text-white'>League of Legends</h4>
            <p className=''>4 anuncios</p>
          </div>
        </a>

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
