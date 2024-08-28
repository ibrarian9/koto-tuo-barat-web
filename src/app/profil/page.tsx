import Navbar from "@/app/components/NavbarDetail";
import FooterPage from "@/app/components/FooterPage";

export default function ProfilePage(){
    const desc = "Desa Koto Tuo Barat merupakan Desa Pemekaran dari Desa Koto Tuo, yang merupakan " +
        "Desa pemindahan dari program Pemerintah, Proyek PLTA Koto Panjang, seiring dengan pesatnya pertumbuhan " +
        "Penduduk dan untuk memudahkan pelayanan terhadap masyarakat, maka Desa Koto Tuo dimekarkanlah, " +
        "Desa Koto Tuo menjadi 2 (Dua) Desa pemekan dinamakan Desa Koto Tuo Barat, sesuai dengan bentang wilayah " +
        "yang berada di sebelah Barat Desa Koto Tuo, Pemekaran Tersebut terlaksana pada Tahun 2005 (Desa Persiapan) " +
        "yang dipimpin oleh Pejabat Sementara Kepala Desa, dan baru Defenitif pada tahun 2008, dengan melaksanakan " +
        "pemilihan kepala Desa pada Tahun tersebut.\n"

    const utara = "Sebelah Utara : Desa Koto Tuo Kecamatan XIII Koto Kampar"
    const barat = "Sebelah Barat : Desa Muara Takus Kecamatan XIII Koto Kampar"
    const selatan = "Sebelah Selatan : Desa Tanjung Kecamatan Koto Kampar Hulu"
    const timur = "Sebelah Timur : Desa Koto Tuo Kecamatan XIII Koto Kampar"

    const visi = "Terbangunnya tata kelola pemerintah Desa yang baik dan bersih,\n" +
        "guna mewujudkan kehidupan bermasyrakat desa yang adil, makmur dan\n" +
        "sejahtera. Saling bekerja sama dan bergotong royong dalam menbangun\n" +
        "desa antar masyarakat dengan pemerintah desa demi tercapainya\n" +
        "kerukunan dan kesejahteraan masyarkat."

    return(
        <>
            <Navbar/>
            <div className="flex min-h-screen flex-col items-center justify-start lg:py-32 p-10 bg-secondary">
                <div className="flex flex-col lg:flex-row lg:mx-24 w-full px-10 py-5 mt-10 text-primary">
                    <div className="flex flex-col flex-1 px-5 justify-between h-full lg:me-10">
                        <h1 className="text-2xl font-bold mb-3">Sejarah Desa Koto Tuo Barat</h1>
                        <p className="text-justify indent-10">
                            {desc}
                        </p>
                        <h1 className="text-2xl font-bold my-3">Batas-batas Wilayah Desa Koto Tuo Barat</h1>
                        <p className="text-justify">
                            {utara}
                        </p>
                        <p className="text-justify">
                            {barat}
                        </p>
                        <p className="text-justify">
                            {selatan}
                        </p>
                        <p className="text-justify">
                            {timur}
                        </p>
                    </div>
                    <img src="/simpangKobar.jpeg" className="lg:w-1/3 h-96 border-2 border-primary mt-10 lg:mt-0" alt="Simpang Kobar"/>
                </div>
            </div>
            <div className="min-h-screen w-full bg-primary flex flex-col items-center justify-center">
                <div className="h-fit w-full text-secondary">
                    <h1 className="text-3xl font-bold text-center lg:mb-14 my-10 lg:my-0">VISI & MISI</h1>
                    <div className="lg:grid grid-cols-2 gap-20 w-full h-full px-10 md:px-36">
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