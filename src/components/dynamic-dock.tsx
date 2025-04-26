import React, { useEffect, useRef, useState } from "react";

interface DynamicDockProps {
  children: React.ReactNode;
  gapX: number;
  baseWidth: number;
  direction?: "row" | "column";
  justifyContent?:
    | "center"
    | "start"
    | "end"
    | "space-between"
    | "space-around";
  alignItems?: "center" | "start" | "end" | "stretch";
}

const DynamicDock: React.FC<DynamicDockProps> = ({
  children,
  gapX,
  baseWidth,
  direction = "row",
}) => {
  const dockRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // anggap 768px ke bawah itu mobile
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!dockRef.current || isMobile) return;

    const dock = dockRef.current;
    const items = dock.querySelectorAll(".dock-item");

    const minWidth = baseWidth;
    const maxWidth = baseWidth + 25;
    const influenceRadius = 150;

    const setInitialStyle = () => {
      items.forEach((div) => {
        const el = div as HTMLElement;
        el.style.width = `${minWidth}px`;
        el.style.transition = "width 0.10s ease";
      });
    };

    setInitialStyle();

    const handleMouseMove = (e: MouseEvent) => {
      const dockRect = dock.getBoundingClientRect();
      if (
        e.clientX < dockRect.left ||
        e.clientX > dockRect.right ||
        e.clientY < dockRect.top ||
        e.clientY > dockRect.bottom
      )
        return;

      items.forEach((div) => {
        const el = div as HTMLElement;
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const distance = Math.abs(e.clientX - centerX);

        let newWidth = minWidth;
        if (distance < influenceRadius) {
          const ratio = 1 - distance / influenceRadius;
          newWidth = minWidth + ratio * (maxWidth - minWidth);
        }

        el.style.width = `${newWidth}px`;
      });
    };

    const handleMouseLeave = () => {
      items.forEach((div) => {
        const el = div as HTMLElement;
        el.style.width = `${minWidth}px`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [gapX, baseWidth, isMobile]);

  return (
    <div className="fixed bottom-[1px] left-1/2 -translate-x-1/2 z-50">
      <div
        ref={dockRef}
        className="flex border px-2 bg-background border-border-dock dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-lg rounded-full will-change-transform overflow-visible"
        style={{
          flexDirection: direction,
          justifyContent: "center",
          alignItems: "center",
          gap: `${gapX}px`,
          height: "56px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DynamicDock;
