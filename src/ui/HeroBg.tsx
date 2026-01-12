import { useState } from "react"
import LightRays, { type LightRaysProps } from "../components/LightRays"

const COMMON_RAYS_PROPS: LightRaysProps = {
    raysOrigin: "top-right",
    raysColor: "#ff9500",
    raysSpeed: 0.5,
    lightSpread: 2,
    rayLength: 1.5,
    pulsating: false,
    fadeDistance: 4,
    saturation: 0.5,
    followMouse: true,
    mouseInfluence: 0.05,
    noiseAmount: 0.0,
    distortion: 0,
    brightnessBase: 1.8,
};

function HeroBg() {
    const [isMaskReady, setIsMaskReady] = useState(false);

    return (
        <div className="w-screen h-screen flex justify-center items-center absolute">
            <div className={`mask-container ${isMaskReady ? 'mask-visible' : ''}`}>
                <LightRays {...COMMON_RAYS_PROPS} onReady={() => setIsMaskReady(true)} />
            </div >

            <div className="absolute w-screen h-screen">
                <LightRays {...COMMON_RAYS_PROPS} />
            </div>
        </div>
    )
}

export default HeroBg
