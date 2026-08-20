/**
 * Premium 60FPS Smooth Scrolling Engine
 * Implements mathematical cubic-bezier / ease-in-out interpolation with adaptive duration,
 * zero layout-thrashing, user-interruption cancellation, and prefers-reduced-motion support.
 */

let activeAnimationId: number | null = null;
let removeInterruptionListeners: (() => void) | null = null;

// Symmetrical, highly refined easeInOutCubic curve for silky smooth acceleration and deceleration
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export interface SmoothScrollOptions {
  offset?: number;
  alignment?: 'top' | 'center';
  duration?: number;
  onComplete?: () => void;
}

/**
 * Calculates adaptive duration based on pixel distance
 */
export function calculateAdaptiveDuration(distance: number): number {
  const absDist = Math.abs(distance);
  if (absDist === 0) return 0;
  
  // Power-based scaling keeps short jumps responsive while giving long journeys ample breathing room
  const duration = 400 + Math.pow(absDist / 1000, 0.55) * 300;
  return Math.min(Math.max(duration, 380), 880);
}

/**
 * Cancels any active programmatic smooth scroll animation
 */
export function cancelSmoothScroll(): void {
  if (activeAnimationId !== null) {
    cancelAnimationFrame(activeAnimationId);
    activeAnimationId = null;
  }
  if (removeInterruptionListeners) {
    removeInterruptionListeners();
    removeInterruptionListeners = null;
  }
}

/**
 * Programmatically scrolls the window to a specified Y coordinate using high-precision RAF
 */
export function smoothScrollToY(
  targetY: number,
  options?: SmoothScrollOptions
): void {
  // Cancel any existing smooth scroll to avoid race conditions
  cancelSmoothScroll();

  // Check prefers-reduced-motion
  if (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    window.scrollTo(0, targetY);
    options?.onComplete?.();
    return;
  }

  const startY = window.scrollY || window.pageYOffset;
  const maxScroll = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  );
  const clampedTargetY = Math.min(Math.max(0, targetY), maxScroll);
  const distance = clampedTargetY - startY;

  // If already at or very close to destination, finish immediately
  if (Math.abs(distance) < 2) {
    window.scrollTo(0, clampedTargetY);
    options?.onComplete?.();
    return;
  }

  const duration = options?.duration ?? calculateAdaptiveDuration(distance);
  let startTime: number | null = null;

  // Handler for user interruption (wheel, touch, keyboard)
  const onUserInteraction = (e: Event) => {
    // Only cancel if it's an actual user input event
    if (e.isTrusted) {
      cancelSmoothScroll();
    }
  };

  const interruptionEvents = ['wheel', 'touchmove', 'keydown', 'mousedown'];
  interruptionEvents.forEach((ev) => {
    window.addEventListener(ev, onUserInteraction, { passive: true, capture: true });
  });

  removeInterruptionListeners = () => {
    interruptionEvents.forEach((ev) => {
      window.removeEventListener(ev, onUserInteraction, { capture: true });
    });
  };

  const step = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);

    const currentY = startY + distance * easeProgress;
    window.scrollTo(0, currentY);

    if (progress < 1) {
      activeAnimationId = requestAnimationFrame(step);
    } else {
      window.scrollTo(0, clampedTargetY);
      cancelSmoothScroll();
      options?.onComplete?.();
    }
  };

  activeAnimationId = requestAnimationFrame(step);
}

/**
 * Smoothly scrolls to a DOM element or an element by its ID
 */
export function smoothScrollToElement(
  target: string | HTMLElement,
  options?: SmoothScrollOptions
): boolean {
  const element =
    typeof target === 'string'
      ? document.getElementById(target.replace(/^#/, ''))
      : target;

  if (!element) return false;

  const headerOffset = options?.offset ?? 75;
  const alignment = options?.alignment ?? 'top';

  const rect = element.getBoundingClientRect();
  const currentScrollY = window.scrollY || window.pageYOffset;

  let targetY: number;

  if (alignment === 'center') {
    // If element is smaller than viewport, center it comfortably
    const elementCenterOffset = (window.innerHeight - rect.height) / 2;
    if (elementCenterOffset > headerOffset) {
      targetY = rect.top + currentScrollY - elementCenterOffset;
    } else {
      targetY = rect.top + currentScrollY - headerOffset;
    }
  } else {
    // Align to top with header offset
    targetY = rect.top + currentScrollY - headerOffset;
  }

  smoothScrollToY(targetY, options);
  return true;
}
