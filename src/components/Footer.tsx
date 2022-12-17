import { useEffect, useState } from "react";
export default function Footer (){
    const [navigatorOS, setNavigatorOS] = useState("")
    
    useEffect(()=> {
        if(navigator.userAgent.includes("Windows")){ setNavigatorOS("Windows")}
        if(navigator.userAgent.includes("Mac")){ setNavigatorOS("MacOS")}
        if(navigator.userAgent.includes("Linux")){ setNavigatorOS("Linux")}
        if(navigator.userAgent.includes("Android")){ setNavigatorOS("Android")}
        if(navigator.userAgent.includes("IOS")){ setNavigatorOS("IOS")}


    })
    return(
        <div className="bg-footer-image h-full bg-no-repeat ">
            <div className="flex flex-col justify-center items-center sm:flex-row bg-gradient-to-tr from-black">
                <div className="sm:w-2/5 flex text-white justify-center mt-32">
                    <div className="flex flex-col text-left gap-8">
                        <img className="w-36" src="src/assets/logo.png" alt="" />
                        <h1 className="text-3xl font-bold">Baixe agora o battle.net</h1>
                        <h2>Seus jogos em um só lugar</h2>
                        <h2>Conecte aos seus amigos</h2>
                        <h2>Compre jogos e itens digitais</h2>
                        <button className="w-64 h-10 rounded-md bg-blue-400 font-medium">Baixar para o {navigatorOS}</button>
                    </div>
                    
                </div>
                <div className="flex justify-center items-end overflow-hidden">
                    <img className="bg-fixed min-w-[375px]" src="src/assets/maskgroup.png" alt="" />
                    <img className="absolute min-w-[270px] bg-fixed sm:mb-28" src="src/assets/groupimage2.png" alt="" />
                </div>
            </div>
        </div>
    )

}


