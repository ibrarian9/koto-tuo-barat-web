export default function LandingPage() {
    return (
        <>
            <main className="flex flex-col min-h-screen lg:w-full bg-[url('/simpangKobarFix.png')] bg-cover items-center justify-center">
                <div className="flex flex-col items-center justify-center p-5">
                    <img src={"/logo-13-koto-kampar.png"} className="size-36" alt={"kobar"}/>
                    <h1 className="text-secondary text-7xl font-bold text-center">SELAMAT DATANG</h1>
                    <h1 className="text-secondary text-7xl font-bold text-center">DESA KOTO TUO BARAT</h1>
                </div>
            </main>
        </>
    )
}