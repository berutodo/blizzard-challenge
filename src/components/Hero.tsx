import useSWR from "swr"
import Image from "./Image"

interface ApiObj {
    name: string;
    category: string;
    image: string;
    logo: string;

}

export default function Hero (){
    const { data, error, isLoading } = useSWR('https://api.brchallenges.com/api/blizzard/games', (...args) => fetch(...args).then(res => res.json()))
    if (error) return <div>falhou ao carregar</div>
    if (isLoading) return <div>carregando...</div>
    return(
        <div className="w-screen flex flex-col items-center justify-between sm:justify-center bg-black pb-20 pt-20">
            <div className="Topper flex flex-row p-6 w-full sm:w-3/5 text-white justify-between sm:justify-center ">
                <h1 className="hidden sm:flex">Games</h1>
                <h1 className="text-2xl w-40 text-left">Jogos Exclusivos</h1>
                <div className="Icons hidden sm:flex flex-row">
                    <div className="w-5 h-5 rounded-3xl bg-blue-600"></div>
                    <div className="w-5 h-5 rounded-3xl bg-blue-600"></div>
                    <div className="w-5 h-5 rounded-3xl bg-blue-600"></div>
                    <div className="w-5 h-5 rounded-3xl bg-blue-600"></div>
                </div>
                <div className="flex text-blue-400 items-end flex-row gap-4">
                    <img src="src/assets/4quad.svg" alt="" width={20}/>
                    <h1 className="text-base font-semibold">Ver todos jogos</h1>
                </div>
            </div>
            <div className="flex flex-row flex-wrap sm:w-4/5 justify-center gap-4 sm:gap-10 p-2">
                {data.map( (e: ApiObj) => <Image {...e} key={e.name} />)}
                    <div className="w-40 h-56 sm:w-72 sm:h-auto hover:cursor-pointer text-white flex flex-col justify-center items-center border-2 border-[#212428] rounded-md">
                        <img src="src\assets\blizzard.svg" alt="Blizzard Logo" />
                        <div className="flex flex-row gap-2 items-center">
                            <img src="src/assets/4quad.svg" alt="" /><p>Ver todos os Jogos</p>
                        </div>
                    </div>
            </div>
        </div>
        
    )

}