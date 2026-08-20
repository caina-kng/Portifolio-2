/**
 * Centralized motion tokens and easing curves for 60FPS fluid animations.
 * Curated for a calm, continuous, cinematic feel.
 */

export const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const MOTION_TRANSITIONS = {
  section: {
    duration: 0.85,
    ease: EASE_SMOOTH,
  },
  title: {
    duration: 0.8,
    ease: EASE_SMOOTH,
  },
  text: {
    duration: 0.7,
    delay: 0.12,
    ease: EASE_SMOOTH,
  },
  card: {
    duration: 0.65,
    ease: EASE_SMOOTH,
  },
  image: {
    duration: 1.0,
    ease: EASE_SMOOTH,
  },
  micro: {
    duration: 0.3,
    ease: EASE_SMOOTH,
  },
  radar: {
    duration: 0.5,
    ease: EASE_SMOOTH,
  },
};

export const MOTION_VARIANTS = {
  // Section container reveal
  sectionContainer: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: EASE_SMOOTH,
      },
    },
  },

  // Titles (JOÃO CAINÃ, MINHA TRAJETÓRIA, etc.)
  title: {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: EASE_SMOOTH,
      },
    },
  },

  // Subtitle / Narrative text
  text: {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.12,
        ease: EASE_SMOOTH,
      },
    },
  },

  // Staggered card generator
  cardItem: (index: number = 0) => ({
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay: index * 0.08,
        ease: EASE_SMOOTH,
      },
    },
  }),

  // Subtle image reveal (opacity 0->1, scale 1.02->1)
  image: {
    hidden: { opacity: 0, scale: 1.02 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.0,
        ease: EASE_SMOOTH,
      },
    },
  },

  // Progressive timeline vertical line reveal
  timelineLine: {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: EASE_SMOOTH,
      },
    },
  },
};
