import { useState } from "react";

type FavColorProps = {
  onColorChange: (color: string) => void;
};

export default function FavColor({ onColorChange }: FavColorProps) {
  const [warna, setWarna] = useState("-");

  const handleClick = (newColor: string, bgColor: string) => {
    setWarna(newColor);
    onColorChange(bgColor);
  };

  return (
    <div className="container mx-auto p-4 text-center text-grey">
      <h1>Warna Favorit Saya adalah {warna}</h1>
      <hr className="m-10" />
      <p>Ubah tema ke warna:</p>
      
      <button
        className="bg-orange-300 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded m-2"
        onClick={() => handleClick("Orange", "bg-orange-500")}
      >
        Orange
      </button>
      
      <button
        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2"
        onClick={() => handleClick("Gelap", "bg-gray-900")}
      >
        Gelap
      </button>
      
      <button
        className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded m-2 border border-gray-300"
        onClick={() => handleClick("Terang", "bg-white")}
      >
        Terang
      </button>
    </div>
  );
}
