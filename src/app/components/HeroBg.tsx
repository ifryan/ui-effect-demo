import { useState } from "react";
import LightRays, { type LightRaysProps } from "@/components/LightRays";
import { cn } from "@/lib/utils";

const COMMON_RAYS_PROPS: LightRaysProps = {
  raysOrigin: "top-right",
  raysColor: "#ff9500",
  raysSpeed: 0.5,
  lightSpread: 15,
  rayLength: 10,
  pulsating: false,
  fadeDistance: 1.5,
  saturation: 0.2,
  followMouse: true,
  mouseInfluence: 0.05,
  noiseAmount: 0.0,
  distortion: 0,
  brightnessBase: 4,
};

function HeroBg() {
  const [isMaskReady, setIsMaskReady] = useState(true);

  return (
    <div className="w-full ratio-[1440/1024] relative">
      <div
        className={cn("mask-container", {
          "mask-visible": isMaskReady,
        })}
      >
        <LightRays
          {...COMMON_RAYS_PROPS}
          onReady={() => setIsMaskReady(true)}
        />
      </div>

      <LightRays {...COMMON_RAYS_PROPS} />
    </div>
  );
}

export default HeroBg;
