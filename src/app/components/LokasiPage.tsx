export default function LokasiPage() {
    return (
        <>
            <main className="flex flex-col min-h-screen bg-primary">
                <h2 className="text-secondary font-bold text-4xl text-center mt-5 mb-10">Lokasi Desa Koto Tuo Barat</h2>
                <div className="flex flex-col lg:flex-row h-full justify-center items-center">
                    <div className="lg:size-1/3 mx-5">
                        <img src="/denahKobar.jpeg" alt="Denah Kobar"/>
                        <h2 className="text-secondary font-bold text-sm text-start my-5">DENAH DESA</h2>
                    </div>
                    <div className="lg:mx-14"></div>
                    <div className="lg:size-1/3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.761790664997!2d100.67455559999999!3d0.305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMTgnMTguMCJOIDEwMMKwNDAnMjguNCJF!5e0!3m2!1sen!2sid!4v1722605314308!5m2!1sen!2sid"
                            width="510" height="460" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <h2 className="text-secondary font-bold text-sm text-start my-5">LOKASI DESA</h2>
                    </div>
                </div>
            </main>
        </>
    )
}