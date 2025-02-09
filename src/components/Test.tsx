import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerEffect({
  name: "fade",
  defaults: { duration: 2 },
  effect: (targets: any, config: any) => {
    return gsap.to(targets, { duration: config.duration, opacity: 0 });
  },
});

gsap.registerEffect({
  name: "explode",
  effect: (targets: any, config: any) => {
    return gsap.to(targets, {
      scrollTrigger: {
        trigger: targets,
        pin: "#screen",

        start: "top top",
        end: "bottom top",

        toggleActions: "restart none none none",
      },
      transformOrigin: "center",
      scale: 1,
      duration: 1,
    });
  },
});

const Test = () => {
  const container1 = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    if (imgRef.current) {
      gsap.effects.explode(imgRef.current);
    }
  }, []);

  return (
    <div>
      <div
        ref={container1}
        className="h-screen flex justify-center items-center overflow-hidden"
      >
        <img
          ref={imgRef}
          src="../images/shanti.jpg"
          id="screen"
          alt=""
          className="w-full h-full object-cover men scale-175 brightness-110 contrast-60 grayscale-10 absolute z-[-1]"
        />
        <div className="text-amber-200 text-9xl">
          <div className="text-[10px] flex">
            <div className="box-border border-2 border-white rounded-full p-2 text-amber-200 mx-1">
              #very
            </div>
            <div className="box-border border-2 border-white rounded-full p-2 text-amber-200 mx-1">
              #nice
            </div>
          </div>
          <div className="font-bold">SHANTI PRIYA</div>
        </div>
      </div>
      <div
        ref={container1}
        className="h-screen flex justify-center items-center overflow-hidden"
      >
        <img
          ref={imgRef}
          src="../images/shanti.jpg"
          id="screen"
          alt=""
          className="w-full h-full object-cover men scale-175 brightness-110 contrast-60 grayscale-10 absolute z-[-1]"
        />
        <div className="text-amber-200 text-9xl">
          <div className="text-[10px] flex">
            <div className="box-border border-2 border-white rounded-full p-2 text-amber-200 mx-1">
              #very
            </div>
            <div className="box-border border-2 border-white rounded-full p-2 text-amber-200 mx-1">
              #nice
            </div>
          </div>
          <div className="font-bold">SHANTI PRIYA</div>
        </div>
      </div>
    </div>
  );
};

export default Test;
