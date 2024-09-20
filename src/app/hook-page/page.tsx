import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

type apiObject = {
    id: number
    name: string,
    status: string
}

export const metadata: Metadata = {
    title: "Characters list",
    description: "All rick and morty character consuming an API",
};

const HookPage = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();

    return (
        <>
            <h1>Server side request</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {data.results.map((item : apiObject, i : number) => {
                    return (
                        <div style={{ marginBottom: "10px"}} key={i}>
                            <h1>{item.name}</h1>
                            <p>{item.status}</p>
                            <Link href={`/character/${item.id}`}>Click here</Link>
                        </div>
                    )
                })}
            </Suspense>
        </>
    )
}

export default HookPage;