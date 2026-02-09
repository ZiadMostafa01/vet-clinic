import { useEffect, useRef } from "react";

function ProgressBar() {
  const progressRef = useRef(null);

  useEffect(() => {
    let animationFrame;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercent = Math.min(
        Math.max((scrollTop / scrollHeight) * 100, 0),
        100,
      );

      if (progressRef.current) {
        progressRef.current.style.width = scrolledPercent + "%";
        progressRef.current.style.opacity = scrollTop > 0 ? "1" : "0";
      }

      animationFrame = requestAnimationFrame(updateProgress);
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="h-1 w-full bg-blue-100 overflow-hidden">
      <div
        ref={progressRef}
        className="h-full bg-[var(--primary)] transition-all duration-75 ease-out opacity-0"
      ></div>
    </div>
  );
}

export default ProgressBar;
