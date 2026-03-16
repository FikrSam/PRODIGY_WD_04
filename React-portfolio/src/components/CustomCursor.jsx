import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const sentinelRef = useRef(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const handleMouseMove = (e) => {
      sentinel.style.left = e.clientX + "px";
      sentinel.style.top = e.clientY + "px";
    };

    const handleMouseEnter = () => {
      sentinel.style.transform = "translate(-50%, -50%) scale(6)";
    };

    const handleMouseLeave = () => {
      sentinel.style.transform = "translate(-50%, -50%) scale(1)";
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Attach listeners to all current and future 'a' tags using event delegation
    // Or simpler for this static portfolio: just attach to existing ones after a short delay
    // But MutationObserver is more robust for React
    
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a").forEach((el) => {
        // Remove old to prevent duplicates
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        // Add new
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial attach
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      document.querySelectorAll("a").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return <div id="sentinel" ref={sentinelRef}></div>;
};

export default CustomCursor;
