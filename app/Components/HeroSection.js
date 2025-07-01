export default function HeroSection() {
    return (
      <section
        className="relative bg-cover bg-center h-[410px] w-full"
        style={{ backgroundImage: "url('/slider.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
  
        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 md:px-20">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
           Print Hub Solution Team Services
          </h1>
          <p className="text-white text-xl sm:text-2xl mb-4 font-semibold">
            We’re here to help!
          </p>
          <p className="text-yellow-400 text-lg sm:text-xl font-semibold">
            Call +1-801-880-7434
          </p>
        </div>
      </section>
    );
  }
  