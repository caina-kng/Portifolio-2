/**
 * Central motion configurations for smooth, 60fps cinematic transitions.
 * Standardized easing: [0.22, 1, 0.36, 1]
 */

export const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

export const smoothTransition = {
  duration: 0.8,
  ease: SMOOTH_EASE,
};

export const microTransition = {
  duration: 0.3,
  ease: SMOOTH_EASE,
};

export const standardTransition = {
  duration: 0.6,
  ease: SMOOTH_EASE,
};

// Section Viewport Trigger config (triggers once smoothly)
export const viewportOnce = {
  once: true,
  amount: 0.15,
};

// Container with progressive stagger
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

// Fast card stagger
export const cardStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

// Section Header / Title Reveal
export const titleRise = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: SMOOTH_EASE,
    },
  },
};

// Paragraph / Subtitle Reveal
export const textRise = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: SMOOTH_EASE,
    },
  },
};

// General Section Block Fade & Rise
export const fadeInRise = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: SMOOTH_EASE,
    },
  },
};

// Card Entry Variant
export const cardVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: SMOOTH_EASE,
    },
  },
};

// Subtle Image Reveal
export const imageReveal = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: SMOOTH_EASE,
    },
  },
};

// Timeline Step Reveal
export const timelineStepVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: SMOOTH_EASE,
    },
  },
};
