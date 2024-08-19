import Link from "next/link";

// Icon
import {
    LocationOnRounded,
    MailOutlineRounded,
    CallOutlined
} from '@mui/icons-material';

const Footer = () => {
    return(
        <footer className="bg-[#059AA3] w-screen py-10 sm:px-0 px-4">
            <div className="container mx-auto flex sm:flex-row flex-col justify-between mb-3">
                <iframe className="sm:w-96 w-full h-96"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77204.4418771121!2d105.59118631707948!3d-6.592533095597894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e43b0d0560bd661%3A0x71fff929f832de21!2sBanyuasih%2C%20Cigeulis%2C%20Pandeglang%20Regency%2C%20Banten!5e1!3m2!1sen!2sid!4v1723804732080!5m2!1sen!2sid"
                    loading="lazy"
                >
                </iframe>
                
                <div className="flex flex-col">
                    <h4 className="text-lg mb-4"
                    >Produk Olahan</h4>

                    <Link className="mb-3"
                        href={"google.com"}
                    >Seafood</Link>
                    <Link className="mb-3"
                        href={"google.com"}
                    >Gula Aren</Link>
                </div>
                
                <div className="flex flex-col">
                    <h4 className="text-lg mb-4"
                    >Organisasi Masyarakat</h4>

                    <Link className="mb-3"
                        href={"google.com"}
                    >Seafood</Link>
                    <Link className="mb-3"
                        href={"google.com"}
                    >Seafood</Link>
                    <Link className="mb-3"
                        href={"google.com"}
                    >Seafood</Link>
                    <Link className="mb-3"
                        href={"google.com"}
                    >Seafood</Link>
                </div>

                <div className="flex flex-col"
                >
                    <div className="mb-3"
                    >
                        <MailOutlineRounded/>
                        <Link className="text-base ml-2"
                            href={"mailto:desabanyuasih5@gmail.com"}
                            type="mail"
                        >
                            desabanyuasih5@gmail.com
                        </Link>
                    </div>

                    <div
                    >
                        <CallOutlined/>
                        <Link className="text-base ml-2"
                            href={"tel:+6285212726730"}
                            type="tel"
                        >
                            +62 852 1272 6730
                            <br></br>
                            <span className="text-base"
                            >
                                Andre (Staf perangkat desa)
                            </span>
                        </Link>
                    </div>
                </div>
                
                <div className="flex flex-col">
                    <h4>KONTAK</h4>
                    
                    <div className="flex flex-row"
                    >
                        <LocationOnRounded/>
                        <p>
                            Desa Banyuasih, Kec. Cigeulis, Kab. Pandegalng, Banten, 42282
                        </p>
                    </div>

                    <Link href={"google.com"}></Link>
                </div>
            </div>
            
            <hr></hr>

            <div className="container mx-auto w-full"
            >
                <span className=""
                >
                    © Hak Cipta, KKM 61 PKN STAN
                </span>
            </div>
        </footer>
    );
}

export default Footer;