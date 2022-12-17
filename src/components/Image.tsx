type ImageProps = {
    name: string;
    category: string;
    image: string;
    logo: string;
}

export default function Image ({name, category, image, logo }:ImageProps){
    return (
        <div className="w-72 hover:cursor-pointer flex flex-col text-left items-center  overflow-hidden">
            <div className="imagens flex justify-center items-end mb-6">
                <img className="rounded-md" src={image} alt={name} />
                <img className="absolute mb-8" src={logo} alt="" />
            </div>
            <div className="text-white w-full">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm font-normal">{category}</p>
            </div>
            
        </div>
    )
}