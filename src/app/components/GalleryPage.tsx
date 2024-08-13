"use client"

import {useState} from "react";
import Link from "next/link";
import {data} from "@/app/data";

export default function GalleryPage() {

    const [visibleCount, setVisibleCount] = useState(4)
    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 4)
    }

    return (
        <>
            <main className="flex flex-col w-full min-h-screen bg-secondary">
                <h1 className="text-primary text-4xl font-bold text-center pt-10">Gallery Desa Koto Tuo Barat</h1>
                <div className="grid grid-cols-4 gap-4 place-items-stretch h-[87] my-5 px-20 pb-5">
                    {data.slice(0,visibleCount).map((item, index) => (
                        <Link
                            key={index}
                            className="h-96 border-2 border-primary flex flex-col justify-between"
                            style={{
                                backgroundImage: `url(${item.foto[0]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                            href={`/detail/${item.id}`}>
                            <div className="flex-grow"></div>
                            <h3 className="text-secondary font-bold text-xl px-5 pb-3 pt-7 bg-gradient-to-t from-primary w-full">
                                {item.nama}
                            </h3>
                        </Link>
                    ))}
                </div>
                {visibleCount < data.length && (
                    <div className="w-full flex justify-center items-center mb-10">
                        <button
                            onClick={loadMore}
                            className="border-2 border-primary px-5 py-2 rounded-lg w-1/6 text-primary hover:bg-primary hover:text-secondary text-center">
                            Load More
                        </button>
                    </div>
                )}
            </main>
        </>
    )
}