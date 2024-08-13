import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import ProductBrowser from "@/components/Browsers/ProductBrowser";
import RangeBrowser from "@/components/Browsers/RangeBrowser";

export default function Home() {
  return (
    <div className="max-w-[1920px]">
      <Navbar />
      <Banner />
      <RangeBrowser />
      <ProductBrowser />
    </div>
  );
}
