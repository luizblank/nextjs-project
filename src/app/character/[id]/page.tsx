import Image from "next/image";
import React from "react";

interface ICharacter {
    params: {
        id: string;
    }
}

interface IData {
    id: number,
    name: string,
    status: string,
    species: string,
    image: string
}

interface IDataStaticIndex {
    results: IData[];
}

const Character = async ({ params: {id} } : ICharacter) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data : IData = await res.json();

    return (
        <>
            <div>
                <h1>{data.name}</h1>
                <h2>{data.id}</h2>
                <p>{data.status}</p>
                <Image src={data.image} alt={`${data.name} ${data.id}`} width={100} height={100} className="h-auto"/>
            </div>
        </>
    )
}

export default Character;

// export async function  generateStaticParams() {
//     const res = await fetch(`https://rickandmortyapi.com/api/character/`);
//     const data : IDataStaticIndex = await res.json();

//     return (
//         <>
//             {data.results.map((item, i) => item.id.toString())}
//         </>
//     )
// }