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
        <div className="w-screen flex justify-center bg-black">
        <div className="flex flex-row flex-wrap w-4/5 justify-center gap-10 p-2">
        {data.map( (e: ApiObj) => <Image {...e} key={e.name} />)}
        <div className="w-72 text-white flex flex-col justify-center items-center border-2 border-[#212428] rounded-md">
            <h1>Blizzard</h1>
            <p>Ver todos os Jogos</p>
        </div>
        </div>
        </div>
        
    )

}