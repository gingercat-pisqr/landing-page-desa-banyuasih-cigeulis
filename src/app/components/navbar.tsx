'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

// Icon
import { MenuOutlined } from '@mui/icons-material';

const Navbar = () => {
    const [state, setState] = useState(0);
    function showMenu() {
        state == 0? setState(1):setState(0);
    }
    console.log(state)
    return(
        <nav className="items-center flex w-screen py-2 z-50 top-0 bg-[#EEF5F6] text-[#6F7980] fixed"
        >
            <button className="absolute left-0 sm:hidden block"
                onClick={()=>(showMenu())}
            >
                <MenuOutlined
                    style={{color:"#059AA3"}}
                />
            </button>
            
            <div className="container mx-auto flex flex-row sm:justify-between justify-center"
            >
                <Link className="text-2xl"
                    href={"/#"}
                >
                    Banyuasih
                </Link>

                <div className="sm:flex sm:flex-row flex-col justify-around items-center hidden"
                    id="Menu"
                >
                    <Link className="mx-4 sm:mb-0 mb-1"
                        href={"/#Beranda"}
                    >
                        Beranda
                    </Link>

                    <Link className="mx-4 sm:mb-0 mb-1"
                        href={"/#Pantai"}
                    >
                        Pantai
                    </Link>
                    
                    <Link className="mx-4 sm:mb-0 mb-1"
                        href={"/#Ulasan"}
                    >
                        Ulasan
                    </Link>

                    <Link className="mx-4 sm:mb-0 mb-1"
                        href={"/#Galeri"}
                    >
                        Galeri
                    </Link>
                </div>

                {
                    state == 1?
                    <div className="flex sm:flex-row flex-col justify-around sm:static absolute left-0 top-12 items-center bg-[#EEF5F6] sm:py-0 py-2"
                        id="Menu"
                    >
                        <Link className="mx-4 sm:mb-0 mb-1"
                            href={"/#Beranda"}
                        >
                            Beranda
                        </Link>

                        <Link className="mx-4 sm:mb-0 mb-1"
                            href={"/#Pantai"}
                        >
                            Pantai
                        </Link>
                        
                        <Link className="mx-4 sm:mb-0 mb-1"
                            href={"/#Ulasan"}
                        >
                            Ulasan
                        </Link>

                        <Link className="mx-4 sm:mb-0 mb-1"
                            href={"/#Galeri"}
                        >
                            Galeri
                        </Link>
                    </div>:<></>
                }
            </div>
        </nav>
    );
}

export default Navbar;