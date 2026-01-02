import { Hero } from "@/components/Hero";
import { CompanyInfo } from "@/components/CompanyInfo";
import { Goals } from "@/components/Goals";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyInfo />
      <Goals />
      <Products />
    </>
  );
}
