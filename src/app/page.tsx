import Hero from "@/components/sections/Hero";

import "./style.css";
import Blackboard from "@/components/sections/Blackboard";
import Intro from "@/components/sections/Intro";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import Gap from "@/components/sections/Gap";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <div className="flex flex-col  max-w-320 mx-auto mb-10">
        <Blackboard />
        <Gap />
        <Intro />
        <Gap />
        <Features />
        <Gap />
        <CTA />
      </div>
    </div>
  );
}
