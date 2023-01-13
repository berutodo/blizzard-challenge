import { useState } from "react";
import Menu from "./Menu";

export default function Header (){
    const [defineImg, setDefineImg] = useState("url(https://res.cloudinary.com/ddsivmxle/image/upload/v1671069014/image_2_qnmfvt.webp)")
    return(
        <div className={`h-[640px]`} style={{backgroundImage: defineImg}}>
            <Menu/>
            <button className="w-10 h-5 bg-slate-300 rounded-sm" onClick={() => setDefineImg('url(https://res.cloudinary.com/ddsivmxle/image/upload/v1671069014/image_2_qnmfvt.webp)')}>Teste</button>
            <button className="w-10 h-5 bg-slate-300 rounded-sm" onClick={() => setDefineImg('url(https://res.cloudinary.com/ddsivmxle/image/upload/c_scale,w_1920/v1673631871/hearthstone-bg_aa2nay.png)')}>Teste</button>
            <button className="w-10 h-5 bg-slate-300 rounded-sm" onClick={() => setDefineImg('another-image')}>Teste</button>
            <button className="w-10 h-5 bg-slate-300 rounded-sm" onClick={() => setDefineImg('footer-image')}>Teste</button>

        </div>
    )

}