import Link from "next/link"


const Header = () => {
    return(
        <header className="h-[50rem] sm:bg-left bg-header bg-cover bg-right flex align-middle items-center"
            id="Beranda"
        >
           
            <div className="container sm:mx-auto mx-4"
            
            >
                <h1 className="sm:text-9xl text-6xl mb-16">
                    Visit Banyuasih
                </h1>
                
                <p className="mb-10 text-xl"
                >
                    Pesona Alam yang Memikat, Kenangan yang Abadi!
                </p>

                <Link className="bg-gradient-to-r from-[#F39B46] to-[#ffbe82] rounded-full py-2 px-4 shadow-2xl hover:scale-90 transition-all ease-in-out"
                    href={"/#deskripsi"}
                >
                    Mulai berselancar!
                </Link>
            </div>            
        </header>
    )
}

export default Header


200319