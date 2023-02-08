import { useState } from 'react'
import blizzardSvg from '../../src/assets/blizzard.svg'
export default function Menu () {
    const [useDropdownJogos, setDropdownJogos] = useState(false)
    const dropDown = () => {
        
    }
    return (
        <>
        <div className="flex w-full justify-between text-white sm:justify-center items-center p-6">
            <div className='w-full items-center sm:w-4/5 flex justify-between gap-12'>
                <img src={blizzardSvg} alt="" />
                <div className='hidden sm:flex text-lg font-semibold flex-row items-center gap-10'>
                    <a className='cursor-pointer group flex flex-row items-center justify-center' onMouseOut={() => setDropdownJogos(false)} onMouseOver={() => setDropdownJogos(true)} >  <h1>Jogos</h1> <img className='block group-hover:hidden' src="/arrowdown.svg" alt="" /> <img className='hidden group-hover:block' src="arrowup.svg" alt="" /></a>
                    <a className='cursor-pointer'>Esportes</a>
                    <a className='cursor-pointer'>Loja</a>
                    <a className='cursor-pointer'>Notícias</a>
                    <a className='cursor-pointer'>Suporte</a>
                </div>
                <div className='hidden sm:flex flex-row text-base font-semibold gap-4'>
                    <button className='h-16 w-36 rounded-xl text-white border-2'>Criar Conta</button>
                    <button className='h-16 w-36 rounded-xl text-white bg-blue-500'>Logar</button>
                </div>

                <div className='flex sm:hidden flex-col cursor-pointer gap-1'>
                    <span className='w-6 h-1 bg-white'></span>
                    <span className='w-6 h-1 bg-white'></span>
                    <span className='w-6 h-1 bg-white'></span>
                </div>
            </div>
        </div>
        <hr />
        { useDropdownJogos &&
            <div className='absolute border-2 border-pink-400 flex justify-center w-full bg-black group-hover:block'>
                <div className='w-96 h-44 bg-cyan-400'></div>
            </div>
        }
        </>
    )
}