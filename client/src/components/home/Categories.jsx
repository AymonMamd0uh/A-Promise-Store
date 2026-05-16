const categories = [
  {
    id: 1,
    title: "Hijabs",
    subtitle: "Elegant premium styles",
  },
  {
    id: 2,
    title: "Abayas",
    subtitle: "Luxury modern abayas",
  },
  {
    id: 3,
    title: "Dresses",
    subtitle: "Timeless feminine fashion",
  },
  {
    id: 4,
    title: "Accessories",
    subtitle: "Complete your elegance",
  },
];

const Categories = () => {

  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="section-subtitle">
            Collections
          </p>

          <h2 className="section-title mb-5">
            Shop By Category
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-8">

            Discover our curated modest fashion collections
            crafted for timeless elegance and modern luxury.

          </p>

        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((item) => (

            <div
              key={item.id}
              className="group relative overflow-hidden bg-[#f8f5f0] rounded-[26px] p-7 md:p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer border border-transparent hover:border-gray-200 min-h-[230px] flex flex-col justify-between"
            >

              {/* Background Blur */}
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white opacity-40 group-hover:scale-110 transition duration-500" />

              {/* Content */}
              <div className="relative z-10">

                <p className="uppercase tracking-[3px] text-gray-400 text-[10px] mb-4">

                  Luxury Collection

                </p>

                <h3 className="text-[30px] font-bold leading-[1.2] mb-3">

                  {item.title}

                </h3>

                <p className="text-gray-600 text-[14px] leading-7 max-w-[220px]">

                  {item.subtitle}

                </p>

              </div>

              {/* Button */}
              <div className="relative z-10 mt-8">

                <button className="text-sm font-medium border-b border-black pb-1 hover:opacity-70 transition">

                  Explore Collection

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;