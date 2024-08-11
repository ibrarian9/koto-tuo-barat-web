import Navbar from "@/app/components/Navbar";
import LandingPage from "@/app/components/LandingPage";
import ProfilePage from "@/app/components/ProfilePage";
import LokasiPage from "@/app/components/LokasiPage";
import GalleryPage from "@/app/components/GalleryPage";
import FooterPage from "@/app/components/FooterPage";

export default function Home() {
  return (
      <>
          <div className="scroll-smooth">
              <Navbar />
              <section id="home">
                  <LandingPage />
              </section>
              <section id="profil">
                  <ProfilePage />
              </section>
              <section id="gallery">
                  <GalleryPage />
              </section>
              <section id="lokasi">
                  <LokasiPage />
              </section>
              {/*<DetailPage />*/}
              <section id="footer">
                  <FooterPage />
              </section>
          </div>
      </>
  );
}
