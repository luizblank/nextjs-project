"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface IData {
    name: string;
    id: string
}

const Use = () => {
    const [characters, setCharacters] = useState<IData[]>([]);

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://rickandmortyapi.com/api/character");
            const data = await res.json()
            setCharacters(data.results);
        }
        load();
    }, []);

    return (
        <>
            { characters.map((item, i) => {
                return (
                    <div key={i}>
                        <h1>{item.name}</h1>
                        <Link href={`/character/${item.id}`}>Click here</Link>
                    </div>
                )
            })}
        </>
    )
}

export default Use;