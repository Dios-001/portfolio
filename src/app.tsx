import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import { FiInstagram, FiLinkedin, FiFacebook,  FiGithub, FiTwitter } from "react-icons/fi";
gsap.registerPlugin(useGSAP);

const App = () => {

  const [nav, setNav] = useState(false); // Toggle state for navbar menu


  const container = useRef(null);
  const deerRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: container });

  const handleClick = contextSafe(() => {
    if (!nav) {
      gsap.fromTo(
        deerRef.current,
        { autoAlpha: 0, scaleY: 0, transformOrigin: "top" },
        { autoAlpha: 1, scaleY: 1, duration: 0.5, ease: "power2.out" }
      );
      const tl1 = gsap.timeline();
      const tl2 = gsap.timeline();
      tl1.to('.rotar',{marginBottom:'0px',transformOrigin:"60% 50%"}).to('.rotar',{rotate:-45}).duration(0.5);
      tl2.to('.rotar-1',{marginTop:'0px',transformOrigin:"50% 50%"}).to('.rotar-1',{rotate:45}).duration(0.5);


    } else {
      gsap.to(deerRef.current, {
        autoAlpha: 0,
        scaleY: 0,
        duration: 0.5,
        ease: "power2.in",
      });
      gsap.to('.rotar',{marginBottom:'4px',rotate:0});
      gsap.to('.rotar-1',{marginTop:'4px',rotate:0});
    }
    setNav(!nav);
  });

  useGSAP(() => {
    gsap.fromTo(
      ".something",
      { clipPath: "circle(0% at bottom)", backgroundColor: "white" },
      { clipPath: "circle(150% at bottom)", backgroundColor: "black", duration: 1 }
    );
  }, { scope: container });

  return (
    <div ref={container} className="">
      <Navbar nav={nav} handleClick={handleClick} />
      {/* Fixed full-screen menu */}
      <div
        ref={deerRef}
        className="sitemap bg-white fixed top-0 left-0 w-full h-screen z-10 scale-y-0 opacity-0 flex justify-center items-center px-20"
      >
        <div className="w-full h-50">
          <div>
            <div  className="text-anime md:text-5xl fader">HOME</div>
            <div  className="text-anime md:text-5xl">WORKS</div>
            <div  className="text-anime md:text-5xl">INFO</div>
            <div  className="text-anime md:text-5xl">CONTACT</div>
          </div>
          <div className="w-full h-1 bg-black"></div>
          <div className="socials mt-5 flex justify-around">
            <div className=""><FiInstagram size={25}/></div>
            <div className=""><FiLinkedin size={25}/></div>
            <div className=""><FiTwitter size={25}/></div>
            <div className=""><FiGithub size={25}/></div>
            <div className=""><FiFacebook size={25}/></div>
          </div>
        </div>
      </div>

      <div className="bg-black h-screen something text-white flex justify-center items-center text-5xl">
        <div>
         <div className="font-extrabold tracking-tighter"> <span>Hi !</span> <span>I'm</span> <span>Abhishek</span> </div>
         <div className="text-2xl text-right">description container</div>
         <div className="font-extrabold tracking-tighter"> FULL STACK DEV</div>
         <div className="text-2xl"> description container</div>
        </div>
      </div>
      <div className="bg-blue-600 h-screen scene"></div>
      <div className="design-process"></div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
