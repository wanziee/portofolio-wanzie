import React, { useEffect, useRef } from "react";

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
  justifyContent = "center",
  alignItems = "center",
}) => {
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dockRef.current) return;

    const dock = dockRef.current;
    const items = dock.querySelectorAll(".dock-item");

    const minWidth = baseWidth;
    const maxWidth = baseWidth + 20;
    const influenceRadius = 150;

    const setInitialStyle = () => {
      items.forEach((div) => {
        const el = div as HTMLElement;
        el.style.width = `${minWidth}px`;
        el.style.transition = "width 0.15s ease";
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
  }, [gapX, baseWidth]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        ref={dockRef}
        className="flex border border-gray-300 backdrop-blur bg-white/15  shadow-lg rounded-full will-change-transform overflow-hidden"
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
