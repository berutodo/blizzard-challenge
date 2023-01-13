import { useState } from "react";
import Menu from "./Menu";

export default function Header (){
    const [defineImg, setDefineImg] = useState('main-image')
    return(
        <div className={`bg-${defineImg} h-[640px]`}>
            <Menu/>
            <img className={`bg-${defineImg} w-80 h-40`} alt="" />
            <button className="w-10 h-5 bg-slate-300 rounded-sm" onClick={() => setDefineImg('footer-image')}>Teste</button>
            <button className="w-10 h-5 bg-slate-300 rounded-sm" onClick={() => setDefineImg('second-image')}>Teste</button>
            <button className="w-10 h-5 bg-slate-300 rounded-sm" onClick={() => setDefineImg('another-image')}>Teste</button>
            <button className="w-10 h-5 bg-slate-300 rounded-sm" onClick={() => setDefineImg('footer-image')}>Teste</button>

        </div>
    )

}