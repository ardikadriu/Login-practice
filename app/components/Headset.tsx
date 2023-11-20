import Image from "next/image";
import backgroundImage from "@/public/Headset.png";

const Headset = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "428px",
          height: "523px",
          display: "flex",
          alignItems: "end",
          opacity: "0.20",
        }}
      ></div>
      <h1 className="text-white text-[36px] ml-[23px] opacity-1 absolute top-[410px]">
        <span className="font-bold text-[36px] text-black">Swipe up</span> to{" "}
        <br />
        explore the world
        <br />
        of music
      </h1>
    </div>
  );
};

export default Headset;
