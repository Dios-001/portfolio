import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";

gsap.registerPlugin(useGSAP);

const App = () => {
  const [sticky, setSticky] = useState(false); // Navbar scroll state
  const [nav, setNav] = useState(false); // Toggle state for navbar menu

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 44);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    } else {
      gsap.to(deerRef.current, {
        autoAlpha: 0,
        scaleY: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
    setNav(!nav);
  });

  useGSAP(() => {
    gsap.fromTo(
      ".something",
      { clipPath: "circle(0% at bottom)", backgroundColor: "white" },
      { clipPath: "circle(100% at bottom)", backgroundColor: "black", duration: 3 }
    );
  }, { scope: container });

  return (
    <div ref={container} className="">
      <Navbar nav={nav} sticky={sticky} handleClick={handleClick} />
      {/* Fixed full-screen menu */}
      <div
        ref={deerRef}
        className="navigation-bar bg-white fixed top-0 left-0 w-full h-screen z-10 scale-y-0 opacity-0"
      >
        
      </div>
      <div className="bg-black h-screen something"></div>
      <div className="bg-blue-600 h-screen scene"></div>
    </div>
  );
};

export default App;
