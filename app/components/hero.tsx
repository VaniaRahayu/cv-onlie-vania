import foto from "../foto1.jpeg";

export default function Hero(){
return(
    <div className="container mx-auto p-4 text-center">
    <h1 className="text-grey-400 font-bold">CV Online</h1>
    <h1 className="text-Grey mb-4">Vania Rahayu</h1>
    <Profile />
    <p className="mt-4 mb-8 text-Grey">
    Saya adalah Mahasiswa Sistem Informasi yang memiliki minat kuat dalam pemrograman, analisis data, dan pengelolaan sistem informasi. Berpengalaman dalam mengembangkan solusi berbasis teknologi untuk meningkatkan efisiensi dan produktivitas.
    </p>
</div>
);

}
function Profile() {
    return <img src={foto.src} alt="CV Andin" className="fotoku w-32 h-32 mx-auto rounded-full"/>;
  }