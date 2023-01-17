import { useState } from "react";
import Menu from "./Menu";

export default function Header (){
    const [defineImg, setDefineImg] = useState({image: "url(https://res.cloudinary.com/ddsivmxle/image/upload/v1671069014/image_2_qnmfvt.webp)",
                                                gif: "https://res.cloudinary.com/ddsivmxle/image/upload/v1671489062/diablo-animation_oixsaf.gif",})
    return(
        <div className="sm:h-[640px] bg-center bg-no-repeat" style={{backgroundImage: defineImg.image}}>
            <Menu/>
            <div className="flex flex-col-reverse sm:flex-row justify-center p-6 items-center gap-8 mt-12">
                <div className="flex sm:flex-col sm:gap-3 gap-2">
                    <button className="w-16 h-16 rounded-sm" onClick={() => setDefineImg({image: 'url(https://res.cloudinary.com/ddsivmxle/image/upload/v1671069014/image_2_qnmfvt.webp)', gif: "https://res.cloudinary.com/ddsivmxle/image/upload/v1671489062/diablo-animation_oixsaf.gif"})}>
                    <img src="/game-1.png" alt="" />
                </button>
                <button className="w-16 h-16  rounded-sm" onClick={() => setDefineImg({image: 'url(https://res.cloudinary.com/ddsivmxle/image/upload/c_scale,w_1920/v1673631871/hearthstone-bg_aa2nay.png)', gif: "https://res.cloudinary.com/ddsivmxle/image/upload/v1671489244/hearthstone-animation-min_ool1gc.gif"})}>
                <img src="/game-2.png" alt="" />

                </button>
                <button className="w-16 h-16  rounded-sm" onClick={() => setDefineImg({image: 'url(https://res.cloudinary.com/ddsivmxle/image/upload/c_scale,w_1920/v1673631866/wow-bg_kwvy7q.png)', gif: "https://res.cloudinary.com/ddsivmxle/image/upload/v1671489110/wow-animation_v0okpd.gif"})}>
                <img src="/game-3.png" alt="" />
                </button>
                <button className="w-16 h-16 rounded-sm">
                <img src="/game-4.png" alt="" />
                </button>
                <button className="w-16 h-16  rounded-sm">
                <img src="/game-5.png" alt="" />
                </button>
                    </div>
            <div className="text-white sm:w-1/3 text-left">
                <h1 className="text-6xl font-bold">Retorne à escuridão com o game Diablo IV</h1>
                <p className="text-lg mt-4">O retorno de Lilith traz uma era de escuridão e sofrimento</p>
                <button className="w-40 h-12 bg-blue-500 rounded-md mt-8">Jogue agora.</button>
            </div>
            <div className="flex-col hidden sm:flex">
                <img src="https://res.cloudinary.com/ddsivmxle/image/upload/v1673980354/diablo-logo_c0gpxi.png" alt="" />
                <h1 className="text-white text-end mb-3 mt-10">Assista ao trailer.</h1>

                <div className="imagens group flex justify-center items-end">
                    {/* GIF src-> Alterar */}
                    <img className="hidden w-72 h-36 group-hover:flex" src={defineImg.gif} alt="" />
                <img className="rounded-md w-72 h-36 group-hover:hidden" src='https://res.cloudinary.com/ddsivmxle/image/upload/v1673980394/diablo-animation-cover_rcztdh.png'/>
              <button className="w-16 h-16 bg-slate-900 opacity-80 rounded-full absolute mb-8 flex justify-center items-center group-hover:hidden"><img src="/play.svg" alt="" /></button>
            </div>
            </div>
            
            </div>
            
        </div>
    )

}