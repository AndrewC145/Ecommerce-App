import Hero from "./Hero";
import About from "./About";
import HeroClothing from "./HeroClothing";
import womensStreetwear from "../assets/images/womens-streetwear.jpg";
import mensStreetwear from "../assets/images/mens-streetwear.jpg";

function Home() {
  return (
    <main>
      <Hero></Hero>
      <About></About>
      <div className="flex flex-col gap-2 md:flex-row md:gap-3 lg:gap-4">
        <HeroClothing category="Mens" image={mensStreetwear}></HeroClothing>
        <HeroClothing category="Womens" image={womensStreetwear}></HeroClothing>
      </div>
    </main>
  );
}

export default Home;
