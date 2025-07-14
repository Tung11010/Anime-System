import { useEffect, useState } from "react";
import { useConfigAppStore } from "./useConfigAppStore";

interface WindowDimension {
  width: number;
  height: number;
}

// Sử dụng breakpoint của Tailwind
export const BREAKPOINT_MD = 768; // Tablet

export const useWindowResize = (breakpoint: number = BREAKPOINT_MD) => {
  const { setCollapsed } = useConfigAppStore();
  const [windowDimension, setWindowDimension] = useState<WindowDimension>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      if (window.innerWidth < breakpoint) {
        setCollapsed(false);
      }
    };
    let timeoutId: number | undefined;
    const debouncedHandleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };
    window.addEventListener("resize", debouncedHandleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
      clearTimeout(timeoutId);
    };
  }, [breakpoint, setCollapsed]);

  return windowDimension;
};
