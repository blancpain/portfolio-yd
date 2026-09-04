'use client';
import { motion } from 'framer-motion';
import type React from 'react';

type Ring = {
  label: string;
  radius: number; // percentage of the container width
  startAngle: number; // degrees, -90 is 12 o'clock
  orbitDuration: string;
  reverse?: boolean;
  skills: string[];
};

const RINGS: Ring[] = [
  {
    label: 'Languages',
    radius: 22,
    startAngle: -90,
    orbitDuration: '22s',
    skills: ['Python', 'Rust', 'C', 'TypeScript'],
  },
  {
    label: 'APIs & data',
    radius: 35,
    startAngle: -75,
    orbitDuration: '34s',
    reverse: true,
    skills: ['REST APIs', 'GraphQL', 'FastAPI', 'SQL', 'React', 'PHP'],
  },
  {
    label: 'Platform & tooling',
    radius: 47,
    startAngle: -90,
    orbitDuration: '48s',
    skills: ['Docker', 'Linux', 'AWS', 'Terraform', 'CI/CD', 'Claude Code'],
  },
];

const toPosition = (radius: number, angleDeg: number) => {
  const angle = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + radius * Math.cos(angle)}%`,
    top: `${50 + radius * Math.sin(angle)}%`,
  };
};

const pillClassName = `absolute flex cursor-default select-none items-center justify-center
  whitespace-nowrap rounded-full bg-dark px-5 py-2 text-sm font-semibold text-light
  shadow-lg shadow-dark/20 dark:bg-light dark:text-dark dark:shadow-light/10
  md:px-3 md:py-1.5 md:text-xs`;

const groupedPillClassName = `rounded-full bg-dark px-4 py-1.5 text-sm font-semibold text-light
  dark:bg-light dark:text-dark`;

const Skill = ({
  name,
  radius,
  angle,
  delay,
}: {
  name: string;
  radius: number;
  angle: number;
  delay: number;
}) => {
  const target = toPosition(radius, angle);

  return (
    <motion.div
      className={pillClassName}
      style={{ x: '-50%', y: '-50%' }}
      initial={{ left: '50%', top: '50%', opacity: 0, scale: 0.3 }}
      whileInView={{ ...target, opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: 'spring',
        stiffness: 70,
        damping: 14,
        mass: 0.8,
        delay,
        opacity: { duration: 0.4, delay },
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {name}
    </motion.div>
  );
};

const Orbit = ({ ring, index }: { ring: Ring; index: number }) => {
  const size = `${ring.radius * 2}%`;

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 rounded-full border border-dark/25 dark:border-light/25"
      style={{ width: size, height: size, x: '-50%', y: '-50%' }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      aria-hidden
    >
      <div
        className="absolute inset-0 animate-[spin_var(--orbit-duration)_linear_infinite]"
        style={
          {
            '--orbit-duration': ring.orbitDuration,
            animationDirection: ring.reverse ? 'reverse' : 'normal',
            // Negative delay offsets the start angle so markers don't begin under a pill.
            animationDelay: `-${index * 7}s`,
          } as React.CSSProperties
        }
      >
        <span className="absolute top-0 left-1/2 h-2.5 xs:h-1.5 w-2.5 xs:w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_2px_rgba(182,62,150,0.5)] dark:bg-primaryDark dark:shadow-[0_0_12px_2px_rgba(88,230,217,0.5)]" />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="my-64 md:my-24">
      <h2 className="mb-6 w-full text-center font-bold text-8xl xs:text-4xl md:text-6xl">
        Skills
      </h2>
      <p className="mx-auto mb-16 max-w-2xl text-center font-medium text-dark/75 md:mb-10 md:text-sm dark:text-light/75">
        Languages at the core, APIs and data in the middle, platform and tooling
        on the outer ring.
      </p>

      <div className="relative mx-auto aspect-square w-full max-w-[880px] sm:hidden">
        <div
          className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(182,62,150,0.12)_0%,transparent_60%)] dark:bg-[radial-gradient(circle,rgba(88,230,217,0.12)_0%,transparent_60%)]"
          aria-hidden
        />

        {RINGS.map((ring, index) => (
          <Orbit key={ring.label} ring={ring} index={index} />
        ))}

        <motion.div
          className="absolute top-1/2 left-1/2 flex h-28 w-28 cursor-default select-none flex-col items-center justify-center rounded-full bg-dark text-center font-bold text-light leading-tight shadow-xl ring-4 ring-primary/60 md:h-20 md:w-20 dark:bg-light dark:text-dark dark:ring-primaryDark/60"
          style={{ x: '-50%', y: '-50%' }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 90, damping: 12 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-base md:text-xs">Backend</span>
          <span className="text-sm md:text-[10px]">&amp; Systems</span>
        </motion.div>

        {RINGS.map((ring, ringIndex) =>
          ring.skills.map((name, i) => (
            <Skill
              key={name}
              name={name}
              radius={ring.radius}
              angle={ring.startAngle + (360 / ring.skills.length) * i}
              delay={0.25 + ringIndex * 0.2 + i * 0.06}
            />
          )),
        )}
      </div>

      <div className="hidden sm:flex sm:flex-col sm:gap-8">
        {RINGS.map((ring, ringIndex) => (
          <div key={ring.label}>
            <h3 className="mb-3 font-bold text-dark/60 text-xs uppercase tracking-wider dark:text-light/60">
              {ring.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {ring.skills.map((name, i) => (
                <motion.li
                  key={name}
                  className={groupedPillClassName}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: ringIndex * 0.1 + i * 0.05,
                  }}
                  viewport={{ once: true }}
                >
                  {name}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
