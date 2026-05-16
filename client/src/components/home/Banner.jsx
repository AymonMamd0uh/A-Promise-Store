const Banner = () => {

  return (
    <section className="section-padding bg-white overflow-hidden">

      <div className="container-custom">

        <div className="relative bg-black rounded-[32px] px-8 md:px-16 py-16 md:py-20 overflow-hidden">

          {/* Decorative Blur */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-16 w-[180px] h-[180px] bg-white/5 rounded-full blur-2xl" />

          {/* Content */}
          <div className="relative z-10 max-w-[620px]">

            <p className="uppercase tracking-[4px] text-gray-400 text-xs mb-5">

              Luxury Collection

            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-[1.08] text-white mb-7">

              Modest Fashion
              <br />

              With Timeless Elegance

            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-8 mb-10 max-w-[520px]">

              Discover premium hijab styles and elegant
              modest wear crafted for confidence,
              comfort, and timeless beauty.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">

              <button className="bg-white text-black px-7 py-3.5 rounded-2xl hover:bg-gray-200 transition duration-300 font-medium">

                Explore Collection

              </button>

              <button className="border border-white/20 text-white px-7 py-3.5 rounded-2xl hover:bg-white hover:text-black transition duration-300 font-medium">

                Shop Now

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Banner;