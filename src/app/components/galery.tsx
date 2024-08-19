import Image from "next/image";

interface Parameter {
    readonly judul: string,
    readonly tanggal: string,
    readonly gambar: string,
}

const Galery = ({judul, tanggal, gambar}:Parameter) => {
    return(
        <div className="sm:w-96 w-full h-fit relative"
        >
            <Image className="-z-10"
                width={1000}
                height={1000}
                src={gambar}
                alt="Gambar"
            />

            <div className="mask-image-to-top bg-black py-2 pt-6 bg-opacity-35 absolute bottom-0 z-10 text-white text-center w-full"
            >
                <h3>
                    {judul}
                </h3>

                <span className=" underline underline-offset-4"
                >
                    {tanggal}
                </span>
            </div>
        </div>
    );
}

export default Galery;