import { useEffect, useState } from "react";

interface WindowSize {
  windowWidth: number;
}

const useWindowSize = (): WindowSize => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowWidth };
};

export default useWindowSize;
