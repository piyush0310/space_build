import Image from "next/image";

// Banner 2: Custom Luxury Interiors Moradabad Villas
export default function CustomLuxuryVillaBanner() {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png"
          alt="Custom Luxury Interiors Moradabad Villas"
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
            Custom Luxury Interiors Moradabad Villas
          </h1>
        </div>
      </div>
    </section>
  );
}