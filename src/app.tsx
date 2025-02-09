import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import {
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiGithub,
  FiTwitter,
} from "react-icons/fi";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [nav, setNav] = useState(false); // Toggle state for navbar menu

  const container = useRef(null);
  const deerRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: container });

  const handleHover = contextSafe(() => {
    const handleMouseOut = () => {
      gsap.to(".upar-niche", { y: 0, autoAlpha: 1, duration: 0.5 });
    };
    const handleMouseIn = () => {
      gsap.to(".upar-niche", { y: 50, autoAlpha: 0, duration: 0.5 });
    };
    return { handleMouseOut, handleMouseIn };
  });

  const handleClick = contextSafe(() => {
    if (!nav) {
      gsap.fromTo(
        deerRef.current,
        { autoAlpha: 0, scaleY: 0, transformOrigin: "top" },
        { autoAlpha: 1, scaleY: 1, duration: 0.5, ease: "power2.out" }
      );
      const tl1 = gsap.timeline();
      const tl2 = gsap.timeline();
      tl1
        .to(".rotar", { marginBottom: "0px", transformOrigin: "60% 50%" })
        .to(".rotar", { rotate: -45 })
        .duration(0.5);
      tl2
        .to(".rotar-1", { marginTop: "0px", transformOrigin: "50% 50%" })
        .to(".rotar-1", { rotate: 45 })
        .duration(0.5);
    } else {
      gsap.to(deerRef.current, {
        autoAlpha: 0,
        scaleY: 0,
        duration: 0.5,
        ease: "power2.in",
      });
      gsap.to(".rotar", { marginBottom: "4px", rotate: 0 });
      gsap.to(".rotar-1", { marginTop: "4px", rotate: 0 });
    }
    setNav(!nav);
  });

  useGSAP(
    () => {
      const niche = gsap.timeline();
      niche.fromTo(
        ".niche",
        { backgroundColor: "black" },
        {
          clipPath: "circle(130% at top)",
          backgroundColor: "white",
          duration: 2,
        }
      );
      niche
        .to(".niche", {
          backgroundColor: "white",
          clipPath: "circle(0% at bottom)",
          duration: 2,
        })
        .repeat(-1);
      gsap.fromTo(
        ".something",
        { clipPath: "circle(0% at bottom)", backgroundColor: "white" },
        {
          clipPath: "circle(150% at bottom)",
          backgroundColor: "black",
          duration: 1,
        }
      );
      const safeScrollTrigger = contextSafe(() => {
        ScrollTrigger.create({
          trigger: ".orange",
          pin: "#screen",

          start: "top top",
          end: "bottom top",
        });
        ScrollTrigger.create({
          trigger: ".blue",
          pin: "#screen1",
          start: "top top",
          end: "bottom top",
        });
        ScrollTrigger.create({
          trigger: ".green",
          pin: "#screen2",
          start: "top top",
          end: "bottom top",
        });
        ScrollTrigger.refresh();
      });

      safeScrollTrigger();
    },
    { scope: container }
  );

  return (
    <div ref={container} className="">
      <Navbar nav={nav} handleClick={handleClick} />
      {/* Fixed full-screen menu */}
      <div
        ref={deerRef}
        className="sitemap bg-white fixed top-0 left-0 w-full h-screen z-10 scale-y-0 opacity-0 flex justify-center items-center px-20"
      >
        <div className="w-full h-50">
          <div className="flex justify-between items-center ">
            <div className="">
              <div
                className="text-anime md:text-9xl upar-niche"
                onMouseEnter={handleHover().handleMouseIn}
                onMouseLeave={handleHover().handleMouseOut}
              >
                HOME
              </div>
              <div className="text-anime md:text-9xl">WORKS</div>
            </div>
            <div className="">
              <div className="text-anime md:text-9xl">INFO</div>
              <div className="text-anime md:text-9xl">CONTACT</div>
            </div>
          </div>
          <div className="w-full h-1 bg-black"></div>
          <div className="socials mt-5 flex justify-around">
            <div className="">
              <FiInstagram size={25} />
            </div>
            <div className="">
              <FiLinkedin size={25} />
            </div>
            <div className="">
              <FiTwitter size={25} />
            </div>
            <div className="">
              <FiGithub size={25} />
            </div>
            <div className="">
              <FiFacebook size={25} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black h-screen something  flex flex-col justify-center items-center text-5xl">
        <div className="text-white mt-auto text-9xl">
          <div className="font-extrabold tracking-tighter">
            <span className="p-10 inline-block upar-niche">HI!</span>
            <span>I'M</span> <span>ABHISHEK</span>
          </div>
          <div className="text-2xl text-right">description container</div>
          <div className="font-extrabold tracking-tighter"> FULL STACK DEV</div>
          <div className="text-2xl"> description container</div>
        </div>

        <div className="text-white flex flex-col items-center m-2 mt-auto ">
          <div className="text-2xl font-thin tracking-tighter text-white m-2 w-full h-fit text-center">
            SEE MY WORK
          </div>
          <div>
            <div className="border-box bg-white h-20 w-1 rounded-full niche"></div>
          </div>
        </div>
      </div>
      <div className="2nd title h-40 bg-black text-white text-7xl">
        <div className="font-extrabold">LATEST PROJECTS</div>
      </div>
      <div className="scene text-orange-600 text-8xl">
        <div className="h-screen bg-amber-500 some flex justify-center items-center orange relative">
          <div
            className="screen h-full w-full flex justify-center items-center overflow-hidden"
            id="screen"
          >
            <img
              src="../images/gal1.jpg"
              className="h-full w-full object-cover absolute z-[-1] brightness-110 contrast-60 grayscale-10 "
            />
            <div className="flex flex-col justify-center items-center h-10 text-amber-200">
              <div className="w-full tags flex justify-start">
                <div className="border-box border-white rounded-3xl border-1 text-[10px] p-2 text-center">
                  #work
                </div>
                <div className="border-box border-white rounded-3xl border-1 text-[10px] p-2 text-center">
                  #sexy
                </div>
              </div>
              <div className="tracking-tighter font-bold gal-gadot">
                GAL GADOT
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen  some flex justify-center items-center blue relative">
          <div
            className="screen h-full w-full flex justify-center items-center overflow-hidden"
            id="screen1"
          >
            <img
              src="../images/gal2.jpeg"
              className="h-full w-full object-cover absolute z-[-1] brightness-110 contrast-60 grayscale-10  "
            />
            <div className="flex flex-col justify-center items-center h-10 text-amber-200 ">
              <div className="w-full tags flex justify-start">
                <div className="border-box border-white rounded-3xl border-1 text-[10px] p-2 text-center">
                  #work
                </div>
                <div className="border-box border-white rounded-3xl border-1 text-[10px] p-2 text-center">
                  #sexy
                </div>
              </div>
              <div className="tracking-tighter font-bold gal-gadot">
                GAL GADOT
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen  some flex justify-center items-center green relative">
          <div
            className="screen h-full w-full flex justify-center items-center overflow-hidden"
            id="screen2"
          >
            <img
              src="../images/gal3.jpg"
              className="h-full w-full object-cover absolute z-[-1] brightness-110 contrast-60 grayscale-10 "
            />
            <div className="flex flex-col justify-center items-center h-10 text-amber-200">
              <div className="w-full tags flex justify-start">
                <div className="border-box border-white rounded-3xl border-1 text-[10px] p-2 text-center">
                  #work
                </div>
                <div className="border-box border-white rounded-3xl border-1 text-[10px] p-2 text-center">
                  #sexy
                </div>
              </div>
              <div className="tracking-tighter font-bold gal-gadot">
                GAL GADOT
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="design-process h-screen bg-amber-500"></div>
      <div className="h-screen bg-blue-600"></div>
      <div className="footer"></div>
      <Test />
    </div>
  );
};

export default App;
