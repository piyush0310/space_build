import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"
          alt="Vastu Consultant in Delhi NCR - Transform Your Space with Vasterior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        
        <h1 className="text-black text-2xl sm:text-4xl md:text-5xl font-serif font-medium leading-tight">
          Best Vastu Consultant in Delhi NCR
        </h1>

      </div>
    </section>
  );
}
