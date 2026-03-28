import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import FAQSection from "@/components/home/FAQ";
import FlashSale from "@/components/home/FlashSale";
import Gallery from "@/components/home/Gallery";
import NewsLetter from "@/components/home/NewsLetter";
import PromoBanners from "@/components/home/PromoBanners";
import Testimonial from "@/components/home/Testimonial";
import TrustBar from "@/components/home/TrustBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default async function Home() {
  return (
    <div className="space-y-5">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <TrustBar></TrustBar>
      </section>
      <section>
        <Categories></Categories>
      </section>
      <section>
        <FlashSale></FlashSale>
      </section>
      <section>
        <PromoBanners></PromoBanners>
      </section>
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section>
        <Testimonial></Testimonial>
      </section>
      <section>
        <Gallery></Gallery>
      </section>
      <section>
        <FAQSection></FAQSection>
      </section>
      <section>
        <NewsLetter></NewsLetter>
      </section>
    </div>
  );
}
