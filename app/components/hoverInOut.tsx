import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const HoverSwapDivs = ({ Text }) => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    // Hide bottom div initially
    gsap.set(bottomRef.current, { y: 50, opacity: 0 });

    // Timeline: animate top out, bottom in
    timelineRef.current = gsap.timeline({ paused: true });

    timelineRef.current
      .to(topRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      })
      .fromTo(
        bottomRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "<" // Start both at the same time
      );
  }, []);

  const handleEnter = () => {
    timelineRef.current.play();
  };

  const handleLeave = () => {
    timelineRef.current.reverse();
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        height: "100px",
        width: "250px",
        overflow: "hidden",
        border: "1px solid #ccc",
        borderRadius: "10px",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div
        ref={topRef}
        style={{
          ...boxStyle,
          position: "absolute",
          width: "100%",
        }}
      >
        {Text}
      </div>
      <div
        ref={bottomRef}
        style={{
          ...boxStyle,

          position: "absolute",
          width: "100%",
        }}
      >
        {Text}
      </div>
    </div>
  );
};

const boxStyle = {
  padding: "20px",
  textAlign: "center",

  borderRadius: "10px",
};

export default HoverSwapDivs;
