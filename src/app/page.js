import Banner from "@/components/Banner";
import WhyChooseSection from "@/components/CardSection";
import TestimonialsSection from "@/components/ReviewSection";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Banner/>
    <WhyChooseSection/>
    <TestimonialsSection/>
   </div>
  );
}
