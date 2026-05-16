import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Banner from "@/components/home/Banner";

export default function Home() {
  return (
    <main className="overflow-hidden">

      <div className="space-y-14">

        <Hero />

        <Categories />

        <Banner />

        <FeaturedProducts />

      </div>

    </main>
  );
}