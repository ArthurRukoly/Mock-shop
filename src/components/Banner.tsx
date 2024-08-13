import Image from "../../public/home-back-image.png";

export default function Banner() {
  return (
    <div className="relative h-full  block -z-50">
      <img
        className="inset-0 w-full max-w-[1920px] object-cover"
        src={Image.src}
        alt=""
      />
      <div className="absolute top-[10vw] left-[50vw] flex z-10 items-center w-[40%]  max-w-[800px]">
        <div className="mr-2 bg-[#FFF3E3] pt-[4vw] pb-[2vw] px-[2vw] rounded-2xl max-h-50">
          <p>New Arrival</p>
          <h1 className="font-bold text-[4vw] leading-none text-[#B88E2F] pt-[0.25vw] pb-2">
            Discover Our New Collection
          </h1>
          <p className="text-[1.25vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            incidunt iure, laborum voluptatem aliquam nobis aut asperiores ut
            nesciunt eligendi debitis ullam amet.
          </p>
          <button className="py-[1.5vw] px-[3.25vw] bg-[#B88E2F] text-white mt-[3vw] text-[1.25vw]">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
