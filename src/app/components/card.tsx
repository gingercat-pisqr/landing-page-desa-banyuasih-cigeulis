import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";


//Icons
import {
    FavoriteRounded,
    StarRateRounded,
    LocationOnRounded
} from '@mui/icons-material';

interface Parameter {
    readonly gambar: string;
    readonly harga_tiket: string; 
    readonly nama_wisata: string;
    readonly lokasi: string;
    readonly rating: string;
    readonly jumlah_review: string;
}

const Card = ({gambar, harga_tiket, nama_wisata, rating, lokasi, jumlah_review}:Parameter) => {
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

    return(
        <div className="bg-white"
            ref={fadeIn}
        >
            <Image className="w-96 h-64"
                width={1000}
                height={1000}
                src={gambar}
                alt=""
            />
            <div className="p-5"
            >
                <div className="flex flex-row justify-between items-center mb-3"
                >
                    <h4 className="font-bold text-2xl text-[#059AA3]"
                    >Rp{harga_tiket} / orang</h4>
                    
                    <div className="flex flex-row"
                    >
                        <div className="flex flex-row">
                            <span className="text-base text-[#6F7980] font-bold">{rating}</span>
                            <StarRateRounded
                                style={{color:"#facd18"}}
                            />
                        </div>
                        <FavoriteRounded/>
                    </div>
                </div>
                
                <h3 className="text-[#6F7980] mb-3 font-semibold text-xl text-left"
                >
                    <Link 
                        href={"https://maps.app.goo.gl/KukjCjKwCtrDbVJNA"}
                        target="_blank"
                    >
                        {nama_wisata}
                    </Link>
                </h3>
                
                <div className="flex flex-row"
                >
                    <div className="text-[#6F7980] bg-[#EEF5F6] flex flex-row items-center p-2"
                    >
                        <LocationOnRounded/>
                        <Link className="text-base ml-2"
                            href={""}
                        >{lokasi}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;