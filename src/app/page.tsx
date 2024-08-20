'use client'
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react"

//Icon
import {
  LocationOnRounded,
  WatchRounded
} from '@mui/icons-material';

// Components
import Card from "./components/card";
import Galery from "./components/galery";
import Review from "./components/review";

// API
import { reviews } from "./api/reviews";
import { wisatas } from "./api/wisata";
import { galeries } from "./api/galeries";

const Home = () => {
  let count = 0;
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
              <LocationOnRounded/>
              <p>
                <b>Lokasi: </b>
                <Link
                  href={"https://maps.app.goo.gl/1YnBdsHT7HxUWiCd6"}
                >
                  Desa Banyuasih, Kec. Cigeulis, Kab. Pandeglang
                </Link>
              </p>
            </div>

            <div className="flex flex-row mb-4"
            >
              <WatchRounded/>
              <p>
                <b>Waktu tempuh: </b>
                <Link
                  href={"https://maps.app.goo.gl/wYvkFwoGAmWZwaAT8"}
                >4 Jam dari Jakarta, </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-[#6F7980] text-center text-6xl mb-6"
        ref={fadeIn}
      >
        Desa Wisata Terindah
      </h2>

      {/* SECTION 2 */}
      <section className="bg-section2 h-[40rem] bg-cover bg-center relative flex flex-row sm:justify-normal justify-center"
        id=""
        ref={fadeIn}
      >
        <div className="bg-[#EEF5F6] sm:absolute h-full sm:left-60 w-fit"
        >
          <div className="text-[#6F7980] text-center py-10 sm:px-16 px-8 h-full flex flex-col items-center justify-evenly"
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
                10+
              </h3>
              <p>Rumah Makan</p>
            </div>
            
            <div>
              <h3 className="text-3xl mb-3"
              >
                10 000+ m
              </h3>
              <p>Panjang garis pantai</p>
            </div>
            
            <div>
              <h3 className="text-3xl mb-3"
              >
                99%
              </h3>
              <p>Berkunjung kembali</p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINASI WISATA */}
      <section className="text-[#6F7980]mb-3 container mx-auto my-20 overflow-hidden"
        id="Pantai"
        ref={fadeIn}
      >
        <h2 className="text-[#6F7980] text-center sm:text-left text-6xl mb-6"
        >
          Destinasi Wisata
        </h2>

        <div className="flex sm:flex-row flex-col justify-evenly"
          ref={fadeIn}
        >
          {
            wisatas.map((wisata, index)=>(
              <Card
                key={index}
                gambar={wisata.gambar}
                harga_tiket=""
                nama_wisata={wisata.nama}
                lokasi={wisata.lokasi}
                rating={wisata.rating}
                jumlah_review={wisata.jumlah_review}
                gmaps={wisata.gmaps}
              />
            ))
          }

        </div>

        <div className="flex w-full justify-center mt-6"
        >
          <Link className="bg-gradient-to-r from-[#F39B46] to-[#ffbe82] rounded-full py-4 px-8 shadow-2xl hover:scale-90 transition-all ease-in-out"
            href={"https://www.bing.com/search?q=Wisata+banyuasih+cigeulis+pandeglang&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=wisata+banyuasih+cigeulis+pandegla&sc=6-34&sk=&cvid=7318F2FDFD7040D6BA62092F89E9552C&ghsh=0&ghacc=0&ghpl="}
          >
            Wisata lainnya
          </Link>
        </div>
      </section>

      {/* REVIEW */}
      <section className="text-[#6F7980] my-20 container mx-auto"
        id="Ulasan"
        ref={fadeIn}
      >
        <div className="mb-6 flex flex-row items-end sm:justify-start justify-center"
        >
          <h2 className="text-6xl text-center sm:text-left sm:mr-6"
          >
            Ulasan
          </h2>

          <span className="text-base underline underline-offset-4 sm:block hidden"
          >
            berdasarkan Google
          </span>
        </div>

        <div className="overflow-x-scroll container-snap"
        >
          <div className="flex flex-row justify-start w-fit"
          >
            {
              reviews.map((review, index)=>(
                <Review
                  id={"review"+String(index)}
                  key={index}
                  foto_profil={review.profil}
                  nama={review.nama}
                  tanggal={review.tanggal}
                  deskripsi={review.ulasan}
                  rating={review.rating}
                />
              ))
            }
          </div>
        </div>

        <Image className="-z-50 blur absolute -left-20 opacity-30 object-cover rounded-full h-96 w-96"
          height={1000}
          width={1000}
          src={"/images/backphoto.jpeg"}
          alt=""
        />
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

        <div className="grid lg:grid-cols-3 grid-cols-1"
        >
          {
            galeries.map((gambar, index)=>(
              <Galery
                key={index}
                gambar={gambar.gambar}
                judul={gambar.judul}
                tanggal={gambar.tanggal}
              />
            ))
          }
        </div>
      </section>
    </main>
  );
}

export default Home