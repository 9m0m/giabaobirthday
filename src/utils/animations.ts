export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export const glitchEffect = {
  initial: { x: 0 },
  animate: {
    x: [0, -2, 2, -2, 2, 0],
    transition: { duration: 0.5, repeat: Infinity, repeatDelay: 3 }
  }
};

export const neonGlow = {
  boxShadow: [
    "0 0 5px currentColor",
    "0 0 20px currentColor",
    "0 0 35px currentColor",
    "0 0 5px currentColor"
  ],
  transition: { duration: 2, repeat: Infinity, repeatType: "reverse" as const }
};

export const hologramFloat = {
  y: [0, -10, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
};