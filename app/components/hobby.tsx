import React from 'react';
import hobby1 from "./assets/9.jpg";
import hobby2 from "./assets/10.jpg";
import hobby3 from "./assets/11.jpg";
import hobby4 from "./assets/12.jpg";

const Hobbies = [
  { id: 1, name: "Baca Novel", image: hobby1 },
  { id: 2, name: "Menyanyi", image: hobby2 },
  { id: 3, name: "Joging", image: hobby3 },
  { id: 4, name: "Menonton Film", image: hobby4 },
];

export default function MyGallery() {
  return (
    <section className="container mx-auto p-4 text-center">
      <h2 className="text-gray-700 font-bold">MY GALLERY</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
        {Hobbies.map((hobby) => (
          <div key={hobby.id} className="border-2 border-orange-300/75 rounded-lg bg-orange-300 text-black p-4">
            <img src={hobby.image.src} alt={hobby.name} className="w-full h-auto rounded-md" />
            <div className="mt-2">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
