"use client"

import Navbar from "@/app/components/NavbarDetail";
import { data } from "@/app/data";
import { useState } from "react";

interface Params {
    params: {
        id: number;
    }
}

export default function DetailPage({ params }: Params) {

    const parseId = parseInt(params.id as unknown as string);
    const item = data.find(d => d.id === parseId);
    const [switchFoto, setSwitchFoto] = useState<number>(0)

    if (!item) {
        return (
            <div>
                <Navbar/>
                <main className="flex flex-col w-full min-h-screen bg-secondary items-center justify-center">
                    <h1 className="text-primary font-bold text-4xl">Data Not Found</h1>
                </main>
            </div>
        )
            ;
    }
    return (
        <>
            <Navbar/>
            <main className="flex flex-col w-full min-h-screen bg-secondary items-center justify-center">
                <div className="flex w-full px-20 pt-20">
                    <div className="flex flex-col w-5/6 my-auto">
                        <h1 className="text-primary font-bold text-4xl my-1">{item.nama}</h1>
                        <h1 className="text-primary text-md mt-2">{item.tgl}</h1>
                        <div className="flex flex-col me-20">
                            <p className="text-primary text-sm text-justify my-10">
                                {item.desc}
                            </p>
                        </div>
                        <div>
                            {item.foto.slice(1, 5).map((photo: any, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => setSwitchFoto(index + 1)}
                                    className="size-40 me-11">
                                    <img src={photo} className="border-2 border-primary size-40" alt={photo.name}/>
                                </button>
                                ))}
                        </div>
                    </div>
                    <div className="h-full w-1/2 flex items-center justify-center">
                        <img className="max-h-[29rem] h-full size-full border-2 border-primary"
                             src={item.foto[switchFoto]} alt={item.foto[switchFoto]}/>
                    </div>
                </div>
            </main>
        </>
    )
}