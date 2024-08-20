interface Wisata {
    nama: string,
    rating: number,
    gambar: string,
    lokasi: string,
    gmaps: string,
    jumlah_review: number
}

export const wisatas:Wisata[] = [
    {
        nama: "Pantai Bugel",
        rating: 4.5,
        gambar: "/images/galeri/pantai-bugel-camara.webp",
        lokasi: "Eks Mega Camara",
        gmaps: "https://maps.app.goo.gl/jhJhUQH3xGeQaDUv7",
        jumlah_review: 1008
    },
    {
        nama: "Pantai Camara",
        rating: 4.5,
        gambar: "/images/galeri/Pantai Camara Sore.jpg",
        lokasi: "Kampung Camara",
        gmaps: "https://maps.app.goo.gl/36MEp9XmeuDdB72Y9",
        jumlah_review: 116
    }
]