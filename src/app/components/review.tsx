import Image from "next/image";

interface Parameter {
    readonly id: string
    readonly nama: string,
    readonly tanggal: string,
    readonly foto_profil: string,
    readonly rating: number
    readonly deskripsi: string
}

import { StarRateRounded } from '@mui/icons-material';

const Review = ({id, nama, tanggal, foto_profil, rating, deskripsi}:Parameter) => {
    return(
        <div className="w-96 h-64 flex flex-col bg-white p-4 text-[#6F7980] sm:mb-0 mb-3 mr-6 shadow-sm"
            id={id}
        >
            <div className="flex flex-row justify-between"
            >
                <div className="flex flex-row items-center mb-3"
                >
                    <Image className="rounded-full w-10 h-10 m-1"
                        width={1000}
                        height={1000}
                        src={foto_profil}
                        alt="Foto profil"
                    />

                    <div className="flex flex-col ml-2 overflow-hidden"
                    >
                        <span className="text-base w-36 text-clip"
                        >
                            {nama}
                        </span>

                        <span className="text-base"
                        >
                            {tanggal}
                        </span>
                    </div>
                </div>

                <div>
                    {
                        [...Array(rating)].map((e, i) => <StarRateRounded key={i} style={{color:"#facd18"}}/>)
                    }
                </div>
            </div>

            <div className="overflow-y-scroll text-justify"
            >
                <p>
                    {deskripsi}
                </p>
            </div>
        </div>
    );
}

export default Review;