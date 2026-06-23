import Image from "next/image";

// Banner 12: Modular Kitchen Designer Moradabad
export default function ModularKitchenBanner() {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/df1v3yied/image/upload/v1756540076/p20_bxpldi.png"
          alt="Bathroom Interior Remodeling Moradabad"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-opacity-40 z-10" />
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-serif font-light text-black tracking-widest">
           Bathroom Interior Remodeling Moradabad
          </h1>
        </div>
      </div>
    </section>
  );
}