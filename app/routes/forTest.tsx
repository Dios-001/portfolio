import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Test() {
  const container = useRef(null);
  const { contextSafe } = useGSAP({ scope: container });

  return (
    <div>
      <div className="mouseEnterAnimation text-4xl">Abhi</div>
      <div className="mouseOutAnimation text-4xl">Abhi</div>
    </div>
  );
}
