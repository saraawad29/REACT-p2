import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" ">
      <div className='pt-2 pb-5 mx-20'>
          <span
            className="bg-slate-300 rounded-full inline-block border-white border-8 py-2 px-4">
            <span className="500#71717a italic">sézane</span>
          </span>

          <button
            className="rounded-full text-sm md:text-base px-10">
            Accueil
          </button>
          <button
            className="rounded-full text-sm md:text-base px-10">
            Connexion
          </button>
      </div>
      <div className='flex flex-row space-x-5 h-80 ml-32 mr-20 '>

        <div className='flex flex-col'>
          <div className="bg-cover  bg-center bg-[url('/src/assets/images/boucle.png')] flex flex-1 h-[300px]">
            <h4 className="  text-white font-serif uppercase">Boucle d'orielle</h4>
          </div>
          <strong className='text-sm'>BOUCLES D'OREILLES SANDY</strong>
          <p className=" font-bold text-sm italic my-2">50€</p>
          <button className="hover:bg-slate-700 hover:scale-110 bg-black text-white font-bold text-sm cursor-pointer py-2">
            Ajouter au panier
          </button>
        </div>

        <div className='flex flex-col'>
          <div className="bg-cover bg-center bg-[url('/src/assets/images/collier.png')] flex flex-1 h-[300px]">
            <h4 className=" text-white font-serif uppercase">Collier</h4>
          </div>
          <strong className='text-sm'>COLLIER SITA</strong>
          <p className=" font-bold text-sm italic my-2">70€</p>
          <button className="hover:bg-slate-700 hover:scale-110 bg-black text-white font-bold text-sm cursor-pointer py-2">
            Ajouter au panier
          </button>
        </div>

        <div className='flex flex-col'>
          <div className="bg-cover bg-center bg-[url('/src/assets/images/bague.png')] flex flex-1 h-[300px]">
            <h4 className="  text-white font-serif uppercase">Bague</h4>
          </div>
          <strong className='text-sm'>BAGUE CHIARA</strong>
          <p className=" font-bold text-sm italic my-2">65€</p>
          <button className="hover:bg-slate-700 hover:scale-110 bg-black text-white font-bold text-sm cursor-pointer py-2">
            Ajouter au panier
          </button>
        </div>
      </div>

    </div>


  )
}

export default App;




