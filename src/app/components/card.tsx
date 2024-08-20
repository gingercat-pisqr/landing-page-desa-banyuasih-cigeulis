import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";


//Icons
import {
    FavoriteRounded,
    StarRateRounded,
    LocationOnOutlined,
    GroupsOutlined
} from '@mui/icons-material';

interface Parameter {
    readonly gambar: string;
    readonly harga_tiket: string; 
    readonly nama_wisata: string;
    readonly lokasi: string;
    readonly rating: number;
    readonly jumlah_review: number;
    readonly gmaps: string
}

const Card = ({gambar, harga_tiket, nama_wisata, rating, lokasi, jumlah_review, gmaps}:Parameter) => {
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
        <div className="bg-white sm:w-96 w-full shadow-sm"
            ref={fadeIn}
        >
            <Image className="w-full h-64 object-cover"
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
                    >Rp{harga_tiket} / kendaraan</h4>
                    
                    <div className="flex flex-row"
                    >
                        <div className="flex flex-row">
                            <span className="text-base text-[#6F7980] font-bold">{rating}</span>
                            <StarRateRounded
                                style={{color:"#facd18"}}
                            />
                        </div>
                        <FavoriteRounded
                            style={{color: "#6F7980"}}
                        />
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
                    <div className="text-[#6F7980] bg-[#EEF5F6] flex flex-row items-center p-2 mr-2"
                    >
                        <LocationOnOutlined/>
                        <Link className="text-base ml-2"
                            href={gmaps}
                        >
                            {lokasi}
                        </Link>
                    </div>

                    <div className="text-[#6F7980] bg-[#EEF5F6] flex flex-row items-center p-2"
                    >
                        <GroupsOutlined 
                        />
                        <span className="text-base ml-2"
                        >
                            {jumlah_review}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;