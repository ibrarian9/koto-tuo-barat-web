import Link from "next/link";

export default function ProfilePage() {
    const desc = " Desa Koto Tuo Barat terletak dalam kawasan kecamatan XIII Koto\n" +
        "                Kampar kabupaten Kampar seluas 116 Hektar yang merupakan desa pemekran\n" +
        "                dari desa induk yaitu Desa Koto Tuo pada tanggal 20 Agustus 2007. Sebelum\n" +
        "                desa resmi menjadi desa difinitif, pemerintahan desa dipegang oleh seorang\n" +
        "                Penanggung Jawab Sementara (BJS) Bapak Abd. Zeri S.Psi sebagai kepala\n" +
        "                Desa Koto Tuo Barat yang dianggap cakap dan mampu untuk melaksanakan\n" +
        "                tugas, fungsi dan tanggung jawab, sebagai pejabat sementara kepala Desa\n" +
        "                Koto Tuo Barat, selain itu juga dibebankan tugas untuk mempersiapkan desa\n" +
        "                persiapan menjadi Desa Definitif, dengan diterbitkannya Keputusan Dewan\n" +
        "                Perwakilan Rakyat Kabupaten Kampar Nomor 13/KPTS/DPRD/2007 Tentang\n" +
        "                persetujuan Dewan Perwakilan Rakyat Daerah kabupaten Kampar tentang\n" +
        "                pendefinitifan dan desa pemekaran pada tahun 2007."


    return (
        <div className="flex min-h-screen flex-col items-center justify-start p-32 bg-primary">
            <div className="flex mx-24 h-96 w-full">
                <div className="flex flex-col flex-1 px-12 justify-between h-full">
                    <h1 className="text-3xl font-bold text-secondary">DESA KOTO TUO BARAT</h1>
                    <p className="text-justify indent-8">
                        {desc}
                    </p>
                    <Link className="border-2 border-secondary rounded-xl font-medium
                        text-secondary py-2 px-3 w-1/4 hover:bg-secondary hover:text-primary text-center" href="/profil">
                        Selengkapnya
                    </Link>
                </div>
                <img src="/simpangKobar.jpeg" className="w-1/3 border-2 border-secondary" alt="Simpang Kobar"/>
            </div>
        </div>
    )
}