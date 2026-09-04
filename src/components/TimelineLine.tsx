'use client';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Props = {
  listRef: React.RefObject<HTMLUListElement | null>;
};

type Extent = { left: number; top: number; height: number };

// Vertical scroll-driven line that runs from the center of the first item's
// circle to the center of the last one. Positions are measured from the DOM
// so the line lines up with the icons at every breakpoint.
const TimelineLine = ({ listRef }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [extent, setExtent] = useState<Extent | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // Finish filling when the end of the line reaches 75% of the viewport,
    // which is reachable even for the last section on the page.
    offset: ['start end', 'end 0.75'],
  });

  useEffect(() => {
    const list = listRef.current;
    const parent = ref.current?.parentElement;
    if (!list || !parent) return;

    const measure = () => {
      const circles = list.querySelectorAll<SVGCircleElement>(
        ':scope > li > figure svg circle',
      );
      if (circles.length < 2) return;
      const origin = parent.getBoundingClientRect();
      const centerOf = (el: Element) => {
        const r = el.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - origin.left,
          y: r.top + r.height / 2 - origin.top,
        };
      };
      const first = centerOf(circles[0]);
      const last = centerOf(circles[circles.length - 1]);
      setExtent({ left: first.x, top: first.y, height: last.y - first.y });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, [listRef]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="absolute w-[4px] origin-top bg-dark md:w-[2px] dark:bg-light"
      style={{
        left: extent?.left ?? 0,
        top: extent?.top ?? 0,
        height: extent?.height ?? 0,
        x: '-50%',
        scaleY: scrollYProgress,
      }}
    />
  );
};

export default TimelineLine;
