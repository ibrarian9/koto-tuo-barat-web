import Navbar from "@/app/components/NavbarDetail";
import FooterPage from "@/app/components/FooterPage";

export default function ProfilePage(){
    const desc = "Desa Koto Tuo Barat adalah Desa yang terletak di Kecamatan XIII Koto\n" +
        "Kampar Kabupaten Kampar. Desa Koto Tuo Barat adalah salah satu desa dari 13\n" +
        "desa yang ada di Kecamatan XIII Koto Kampar Kabupaten Kampar.\n"

    const desc1 = "Luas wilayah Desa Koto Tuo Barat Kecamatan XIII Koto Kampar\n" +
        "Kabupaten Kampar hanya ±16000 Ha. 42,5 wilayah merupakan areal pertanian\n" +
        "dan 36% perkebunan sedangkan 21,5% merupakan lahan tidur/hutan belukar.\n" +
        "Ketinggian tanah dari permukaan tanah dari permukaan laut adalah 2-5 m. Adapun\n" +
        "orbitasi atau jarak dari pusat pemerintahan kecamatan ± 7 Km, dari Kota\n" +
        "Kabupaten ± 60 Km dan dari Ibu Kota Provinsi ± 128 Km."

    const desc2 = "Adapun batas Desa disebelah utara berbatasan dengan Kecamatan Tandun\n" +
        "Kabupaten Rokan Hulu, sebelah Selatan berbatasan dengan Desa Tanjung,\n" +
        "sebelah Barat dengan Desa Muara Takusdan sebelah Timur berbatasan dengan\n" +
        "Desa Koto Tuo."

    const desc3 = "Berdasarkan data yang penulis peroleh dari kantor Kepala Desa Koto Tuo\n" +
        "Barat, Jumlah penduduk secara keseluruhan untuk saat ini adalah 2110 jiwa yang\n" +
        "terdiri atas 1060 orang laki-laki dan 1050 orang perempuan."

    const visi = "Terbangunnya tata kelola pemerintah Desa yang baik dan bersih,\n" +
        "guna mewujudkan kehidupan bermasyrakat desa yang adil, makmur dan\n" +
        "sejahtera. Saling bekerja sama dan bergotong royong dalam menbangun\n" +
        "desa antar masyarakat dengan pemerintah desa demi tercapainya\n" +
        "kerukunan dan kesejahteraan masyarkat."

    return(
        <>
            <Navbar/>
            <div className="flex min-h-screen flex-col items-center justify-start lg:p-32 p-10 bg-secondary">
                <div className="flex sm:flex-col lg:mx-24 w-full border-2 border-primary px-10 py-5 mt-10 text-primary">
                    <div className="flex flex-col flex-1 px-5 justify-between h-full lg:me-10">
                        <h1 className="text-2xl font-bold mb-5">Sejarah Desa Koto Tuo Barat</h1>
                        <p className="text-justify indent-10">
                            {desc}
                        </p>
                        <p className="text-justify indent-10">
                            {desc1}
                        </p>
                        <p className="text-justify indent-10">
                            {desc2}
                        </p>
                        <p className="text-justify indent-10 ">
                            {desc3}
                        </p>
                    </div>
                    <img src="/simpangKobar.jpeg" className="lg:w-1/3 h-96 border-2 border-primary mt-10" alt="Simpang Kobar"/>
                </div>
            </div>
            <div className="min-h-screen w-full bg-primary flex flex-col items-center justify-center">
                <div className="h-fit w-full text-secondary">
                    <h1 className="text-3xl font-bold text-center lg:mb-14 my-10">VISI & MISI</h1>
                    <div className="lg:grid grid-cols-2 gap-20 w-full h-full px-36">
                        <div className="h-full">
                            <p className="text-justify indent-10 p-10 border-2 h-full">
                                {visi}
                            </p>
                            <h1 className="text-2xl m-2">VISI</h1>
                        </div>
                        <div className="h-full">
                            <div className="text-justify list-none p-8 border-2 h-full">
                                <li>
                                    A. Menyelenggarakan urusan pemerintah desa secara terbuka sesuai
                                    peraturan perundang-undang.
                                </li>
                                <br/>
                                <li>
                                    B. Meningkatkan mutu kesejahteraan masyarkat untuk mencapai tarap
                                    kehidupan yang lebih baik dan lyak sehingga menjadi desa yang maju
                                    dan makmur.
                                </li>
                                <br/>
                                <li>
                                    C. Bekerjasama dan melayani masyarakat dalam bidang keagamaan demi
                                    tercapainya masyarakat yang sopan dan agamis.
                                </li>
                            </div>
                            <h1 className="text-2xl m-2">MISI</h1>
                        </div>
                    </div>
                </div>
            </div>
            <FooterPage/>
        </>
    )
}