import { useState } from "react";
import "./App.css";

function App() {
  const images = [
    { src: "https://placehold.co/200" },
    { src: "https://placehold.co/200x200/000000/FFFFFF.png" },
    { src: "https://placehold.co/200/orange/white" },
    { src: "https://placehold.co/200/blue/white" },
  ]
  const selectedImage = images[2];
  return (
    <>
      <div className="flex items-center justify-center gap-2 mt-3">
        {images.map((img) => (
          <img className="rounded-full border-2 border-red-800 shadow-md"
            src={img.src}
            key={img.src}
            alt=""
            onError={(e) => {
              e.target.src = "https://path/to/your/default_img.png"; 
            }}
          />
        ))}
      </div>
    </>
  );
}

export default App;
