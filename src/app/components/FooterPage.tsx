import Image from "next/image";

export default function FooterPage() {
    const instagram: string = "@pemdeskobar_official"
    const tiktok: string = "@kkn.koto.tuo.barat.usr24"
    const linkInstagram: string = "https://www.instagram.com/pemdeskobar_official"

    return(
        <>
            <footer className="bg-secondary text-primary py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-3 lg:gap-44 lg:mx-16">
                        <div className="flex flex-col items-start my-auto">
                            <div className="flex items-center mb-3">
                                <img src="/logo-13-koto-kampar.png" alt="Logo" className="h-12 w-auto"/>
                                <span className="lg:ml-3 ml-2 lg:text-2xl text-xl font-bold">Koto Tuo Barat</span>
                            </div>
                            <p className="text-sm ms-1">Desa Koto Tuo Barat terletak di XIII Koto Kampar.</p>
                        </div>
                        <div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div>
                                <h3 className="font-bold mb-2">Connect with Us</h3>
                                <a className="text-sm flex" href={linkInstagram}>
                                    <Image
                                        src={"/instagram.png"}
                                        alt={"Instagram"}
                                        width={20} height={20}
                                        className="me-2"
                                    />
                                    {instagram}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center border-t border-primary pt-4">
                        <p className="text-xs">&copy; KKN UIN Suska Riau 2024.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}