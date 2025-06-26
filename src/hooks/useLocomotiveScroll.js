import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocomotiveScroll(start) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!start || !scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8,
      class: "is-revealed",
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      getDirection: true,
      getSpeed: true,
      inertia: 0.8,
      offset: ["15%", 0],
      repeat: true,
      lerp: 0.1,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [start]);

  return scrollRef;
}
