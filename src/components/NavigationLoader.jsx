import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

// Animation: optional React component to render (e.g. a DotLottie component)
const NavigationLoader = ({
  duration = 900,
  Animation = null,
  background = "rgba(255,255,255,255)",
  size = 650,
}) => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    // don't show on initial mount
    if (first.current) {
      first.current = false;
      return;
    }

    setShow(true);
    const t = setTimeout(() => setShow(false), 1000);
    return () => clearTimeout(t);
  }, [location.pathname, duration]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background }}
    >
      <div
        style={{ width: size, height: size }}
        className="flex items-center justify-center"
      >
         <div className="w-full h-full flex items-center justify-center">
            <Animation />
          </div>
      </div>
    </div>
  );
};

export default NavigationLoader;
