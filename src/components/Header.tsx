import { useState } from "react";
import Menu from "./Menu";

export default function Header (){
    const [defineImg, setDefineImg] = useState({image: "url(https://res.cloudinary.com/ddsivmxle/image/upload/v1671069014/image_2_qnmfvt.webp)",
                                                gif: "https://res.cloudinary.com/ddsivmxle/image/upload/v1671489062/diablo-animation_oixsaf.gif",
                                                logo: "https://res.cloudinary.com/ddsivmxle/image/upload/v1673980354/diablo-logo_c0gpxi.png"})
    return(
        <div className="sm:h-[640px] delay-150 bg-center bg-no-repeat" style={{backgroundImage: defineImg.image}}>
            <Menu/>
            <div className="flex sm:w-4/5 flex-col-reverse sm:flex-row justify-between mx-auto p-6 items-center mt-12">
                    <div className="flex sm:flex-col mt-4 sm:gap-3 gap-2">
                        <button className="w-16 h-16 rounded-sm" onClick={() => setDefineImg({image: 'url(https://res.cloudinary.com/ddsivmxle/image/upload/v1671069014/image_2_qnmfvt.webp)', gif: "https://res.cloudinary.com/ddsivmxle/image/upload/v1671489062/diablo-animation_oixsaf.gif", logo: "https://res.cloudinary.com/ddsivmxle/image/upload/v1673980354/diablo-logo_c0gpxi.png"})}>
                        <img src="/game-1.png" alt="" />
                    </button>
                    <button className="w-16 h-16  rounded-sm" onClick={() => setDefineImg({image: 'url(https://res.cloudinary.com/ddsivmxle/image/upload/c_scale,w_1920/v1673631871/hearthstone-bg_aa2nay.png)', gif: "https://res.cloudinary.com/ddsivmxle/image/upload/v1671489244/hearthstone-animation-min_ool1gc.gif", logo: "https://res.cloudinary.com/ddsivmxle/image/upload/c_scale,h_154,w_280/v1673980354/hearthstone-logo_eqe8ae.png"})}>
                    <img src="/game-2.png" alt="" />

                    </button>
                    <button className="w-16 h-16  rounded-sm" onClick={() => setDefineImg({image: 'url(https://res.cloudinary.com/ddsivmxle/image/upload/c_scale,w_1920/v1673631866/wow-bg_kwvy7q.png)', gif: "https://res.cloudinary.com/ddsivmxle/image/upload/v1671489110/wow-animation_v0okpd.gif", logo: "https://res.cloudinary.com/ddsivmxle/image/upload/c_scale,h_154,w_280/v1673980354/wow-logo_rojqlg.png"})}>
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
                <img src={defineImg.logo} className="delay-150" alt="" />
                <h1 className="text-white text-end mb-3 pt-24">Assista ao trailer.</h1>

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