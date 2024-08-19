'use client'
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react"

//Icon
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import WatchRoundedIcon from '@mui/icons-material/WatchRounded';
import Card from "./components/card";
import Galery from "./components/galery";
import Review from "./components/review";

const Home = () => {
  const fadeIn = useRef<HTMLDivElement|null>(null);
  useEffect(()=>{
      const options = {
          root:null,
          rootMargin: '0px',
          threshold:0.5,
      };
      const observer = new IntersectionObserver((entries)=>{
          entries.forEach((entry)=>{
              if(entry.isIntersecting && fadeIn.current) {
                  fadeIn.current.classList.add('fade-in');
              }
          });
      }, options);

      if (fadeIn.current){observer.observe(fadeIn.current);}
      return () => {
          if (fadeIn.current) {
              observer.unobserve(fadeIn.current);
          }
      };
  },[]);

  return (
    <main className="flex flex-col">

      {/*  */}
      <section className="container mx-auto flex sm:flex-row flex-col sm:items-stretch items-center my-20 text-[#6F7980]"
        id="deskripsi"
        ref={fadeIn}
      >
        <Image className="rounded-full h-96 w-96 object-cover"
          width={1000}
          height={1000}
          src={"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt=""
        />

        <div className="mx-10 text-justify sm:mt-0 mt-10"
        >
          <p className="mb-10"
          >
            Selamat datang di Desa Banyuasih, sebuah permata tersembunyi di Kabupaten Pandeglang, Banten. Desa ini menawarkan pesona alam yang memukau dan berbagai daya tarik wisata yang tak terlupakan. Salah satunya adalah Pantai Bugel Camara, yang terletak di Desa Banyuasih. Pantai ini memiliki pasir putih berkarang yang landai, serta panorama matahari tenggelam (sunset) yang memukau. Bagi para wisatawan, Pantai Bugel Banten adalah tempat yang wajib dikunjungi. Jadi, mari jelajahi keindahan alam Desa Banyuasih dan nikmati pengalaman tak terlupakan!
          </p>

          <div className="flex flex-col"
          >
            <div className="flex flex-row mb-4"
            >
              <LocationOnRoundedIcon/>
              <p>
                <b>Lokasi:</b>
                <Link
                  href={""}
                >Banyuasih</Link>
                <Link
                  href={""}
                >Cigeulis</Link>
                <Link
                  href={""}
                >Pandeglang</Link>
              </p>
            </div>

            <div className="flex flex-row mb-4"
            >
              <WatchRoundedIcon/>
              <p>
                <b>Waktu tempuh:</b>
                <Link
                  href={""}
                >4 Jam dari Jakarta</Link>
                <Link
                  href={""}
                >2 Jam dari Pandeglang</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-[#6F7980] text-center text-6xl mb-6"
        ref={fadeIn}
      >
        Desa Wisata Terindah se-Banten
      </h2>

      {/*  */}
      <section className="bg-section2 h-[40rem] bg-cover bg-center relative flex flex-row sm:justify-normal justify-center"
        id=""
        ref={fadeIn}
      >
        <div className="bg-[#EEF5F6] sm:absolute h-full sm:left-60 w-fit"
        >
          <div className="text-[#6F7980] text-center py-10 sm:px-20 px-8 h-full flex flex-col items-center justify-evenly"
          >
            <div>
              <h3 className="text-3xl mb-3"
              >
                8+ Spot
              </h3>
              <p>Pantai pasir putih</p>
            </div>

            <div>
              <h3 className="text-3xl mb-3"
              >
                100+
              </h3>
              <p>Rumah Makan</p>
            </div>
            
            <div>
              <h3 className="text-3xl mb-3"
              >
                30 000+
              </h3>
              <p>Loren ipsum</p>
            </div>
            
            <div>
              <h3 className="text-3xl mb-3"
              >
                99%
              </h3>
              <p></p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINASI WISATA */}
      <section className="text-[#6F7980]mb-3 container mx-auto my-20"
        id="Pantai"
        ref={fadeIn}
      >
        <h2 className="text-[#6F7980] text-center sm:text-left text-6xl mb-6"
        >
          Destinasi Wisata
        </h2>

        <div className="flex flex-row justify-start"
          ref={fadeIn}
        >
          <Card
            gambar="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            harga_tiket="25 000"
            nama_wisata="Pantai Camara"
            lokasi="Kampung Camara"
            rating="4.5"
            jumlah_review="116"
          />
        </div>
      </section>

      {/* REVIEW */}
      <section className="text-[#6F7980] my-20 container mx-auto"
        id="Ulasan"
        ref={fadeIn}
      >
        <div className="mb-6 flex flex-row items-end sm:justify-start justify-center"
        >
          <h2 className="text-6xl text-center sm:text-left mr-6"
          >
            Kesan
          </h2>

          <span className="text-base underline underline-offset-4 sm:block hidden"
          >
            berdasarkan review Google
          </span>
        </div>

        <div>
          <Review
            foto_profil=""
            nama="Ahmad Wasith"
            tanggal="19.08.2024"
            deskripsi="Bagus, pantainya bersih"
            rating={5}
          />
        </div>
      </section>

      {/* GALERI */}
      <section className="container mx-auto my-20"
        id="Galeri"
        ref={fadeIn}
      >
        <h2 className="text-[#6F7980] text-6xl text-center sm:text-left mb-6"
        >
          Galeri
        </h2>

        <div>
          <Galery
            gambar="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            judul="Pantai Camara"
            tanggal="2022"
          />
        </div>
      </section>
    </main>
  );
}

export default Home