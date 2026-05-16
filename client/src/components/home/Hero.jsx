import Image from "next/image";

import logo from "@/assets/images/logo.png";

const Hero = () => {

  return (
    <section className="w-full bg-gradient-to-b from-[#f8f5f0] to-white overflow-hidden">

      <div className="container-custom min-h-[720px] grid lg:grid-cols-2 gap-10 items-center section-padding">

        {/* Left Side */}
        <div className="max-w-[620px]">

          <p className="section-subtitle">
            Luxury Modest Fashion
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-7">

            Elegant Style
            <br />

            For Modern Women

          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-8 mb-10 max-w-[540px]">

            Discover timeless modest fashion crafted with elegance,
            comfort, and premium quality for confident modern women.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">

            <button className="main-button">
              Shop Collection
            </button>

            <button className="secondary-button">
              Explore More
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end relative">

          {/* Background Blur */}
          <div className="absolute w-[320px] h-[320px] bg-[#f1ebe2] rounded-full blur-3xl opacity-70" />

          <Image
            src={logo}
            alt="A Promise Store"
            width={400}
            priority
            className="relative z-10 object-contain drop-shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;