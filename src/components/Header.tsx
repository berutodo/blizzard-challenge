import { useState } from "react";
import Menu from "./Menu";

export default function Header (){
    const [defineImg, setDefineImg] = useState("url(https://res.cloudinary.com/ddsivmxle/image/upload/v1671069014/image_2_qnmfvt.webp)")
    return(
        <div className={`h-[640px] bg-center`} style={{backgroundImage: defineImg}}>
            <Menu/>
            <div className="flex sm:flex-col sm:gap-8 gap-4">
            <button className="w-16 h-16 rounded-sm" onClick={() => setDefineImg('url(https://res.cloudinary.com/ddsivmxle/image/upload/v1671069014/image_2_qnmfvt.webp)')}>
                <img src="/game-1.png" alt="" />
            </button>
            <button className="w-16 h-16  rounded-sm" onClick={() => setDefineImg('url(https://res.cloudinary.com/ddsivmxle/image/upload/c_scale,w_1920/v1673631871/hearthstone-bg_aa2nay.png)')}>
            <img src="/game-2.png" alt="" />

            </button>
            <button className="w-16 h-16  rounded-sm" onClick={() => setDefineImg('another-image')}>
            <img src="/game-3.png" alt="" />
            </button>
            <button className="w-16 h-16 rounded-sm" onClick={() => setDefineImg('footer-image')}>
            <img src="/game-4.png" alt="" />
            </button>
            <button className="w-16 h-16  rounded-sm" onClick={() => setDefineImg('footer-image')}>
            <img src="/game-5.png" alt="" />
            </button>
            </div>
            
        </div>
    )

}