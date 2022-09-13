import './styles/main.css';

import logoImg from './assets/img/Logo.svg'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black m-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text'>duo</span> está aqui!
      </h1>
    </div>
  )
}

export default App
