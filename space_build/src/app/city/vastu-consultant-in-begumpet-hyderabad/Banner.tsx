import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[400px]  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"
          alt="Vastu Consultant in begumpet hyderabad"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0  bg-opacity-40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-serif font-light text-black tracking-widest">
            Vastu Consultant in begumpet hyderabad
          </h1>
          
        </div>
      </div>
    </section>
  );
}