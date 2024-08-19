import Image from "next/image";

interface Parameter {
    readonly nama: string,
    readonly tanggal: string,
    readonly foto_profil: string,
    readonly rating: number
    readonly deskripsi: string
}

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const Review = ({nama, tanggal, foto_profil, rating, deskripsi}:Parameter) => {
    return(
        <div className="sm:w-96 h-64 flex flex-col bg-white p-4 text-[#6F7980]"
        >
            <div className="flex flex-row justify-between"
            >
                <div className="flex flex-row items-center mb-3"
                >
                    <Image className="rounded-full w-10 h-10 m-1"
                        width={1000}
                        height={1000}
                        src={foto_profil}
                        alt=""
                    />

                    <div className="flex flex-col sm:mr-7"
                    >
                        <span className="text-base"
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
                        [...Array(rating)].map((e, i) => <StarRateRoundedIcon style={{color:"#facd18"}}/>)
                    }
                </div>
            </div>

            <div className=""
            >
                <p>
                    {deskripsi}
                </p>
            </div>
        </div>
    );
}

export default Review;