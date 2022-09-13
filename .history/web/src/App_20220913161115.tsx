import './styles/main.css';

import logoImg from './assets/img/Logo.svg'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logoImg} alt="" />

      <h1>Seu duo está aqui!</h1>
    </div>
  )
}

export default App
