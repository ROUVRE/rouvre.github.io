import { useState } from "react";
import Tilt from "react-parallax-tilt";

const ProfileImage = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Tilt
      tiltReverse
      perspective={800}
      transitionSpeed={800}
      className="shrink-0 w-48 sm:w-56 lg:w-64 cursor-pointer select-none"
    >
      <div
        onClick={() => setFlipped(!flipped)}
        className={`relative w-full h-full transition-transform duration-700 ease-in-out`}
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <img
          src="img/profile.png"
          alt="Reyno"
          draggable="false"
          className="w-full h-auto rounded-xl object-cover shadow-md absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        />

        <img
          src="img/profile-back.jpg"
          alt="Reyno alternate"
          draggable="false"
          className="w-full h-auto rounded-xl object-cover shadow-md"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        />
      </div>
    </Tilt>
  );
};

export default ProfileImage;
