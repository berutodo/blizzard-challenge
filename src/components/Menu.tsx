import blizzardSvg from '../../src/assets/blizzard.svg'
export default function Menu () {
    return (
        <div className="flex w-full justify-between text-white sm:justify-center items-center border-b-[0.1px] border-opacity-10 p-6">
            <div className='w-full items-center sm:w-4/5 flex justify-between gap-12'>
                <img src={blizzardSvg} alt="" />
                <div className='hidden sm:flex text-lg flex-row items-center gap-8'>
                    <a className='cursor-pointer'>Jogos</a>
                    <a className='cursor-pointer'>Esportes</a>
                    <a className='cursor-pointer'>Loja</a>
                    <a className='cursor-pointer'>Notícias</a>
                    <a className='cursor-pointer'>Suporte</a>
                </div>
                <div className='hidden sm:flex flex-row gap-4'>
                    <button className='h-16 w-36 rounded-2xl text-white border-2'>Criar Conta</button>
                    <button className='h-16 w-36 rounded-2xl text-white bg-blue-500'>Logar</button>
                </div>

                <div className='flex sm:hidden flex-col cursor-pointer gap-1'>
                    <span className='w-6 h-1 bg-white'></span>
                    <span className='w-6 h-1 bg-white'></span>
                    <span className='w-6 h-1 bg-white'></span>
                </div>
            </div>
            
        </div>
    )
}