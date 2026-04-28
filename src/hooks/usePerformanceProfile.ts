import { useState, useEffect } from "react";

export interface PerformanceProfile {
  /** True if the device is considered low-end (<= 4 CPU cores or <= 4 GB RAM) */
  isLowEnd: boolean;
  /** True if the user prefers reduced motion */
  prefersReducedMotion: boolean;
  /** True if animations should be enabled at all */
  enableAnimations: boolean;
  /** True if backdrop-filter blur should be used */
  enableBlur: boolean;
  /** True if heavy box-shadow glows should be used */
  enableGlows: boolean;
}

function getHardwareConcurrency(): number {
  try {
    return navigator.hardwareConcurrency || 4;
  } catch {
    return 4;
  }
}

function getDeviceMemory(): number {
  try {
    // @ts-expect-error deviceMemory is not in all TS lib definitions
    return navigator.deviceMemory || 4;
  } catch {
    return 4;
  }
}

function getPrefersReducedMotion(): boolean {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

function calculateProfile(): PerformanceProfile {
  const cores = getHardwareConcurrency();
  const memory = getDeviceMemory();
  const prefersReducedMotion = getPrefersReducedMotion();

  // Low-end heuristic: <= 4 cores OR <= 4 GB RAM
  const isLowEnd = cores <= 4 || memory <= 4;

  // Disable animations entirely for reduced-motion or very low-end (<= 2 cores / <= 2 GB)
  const veryLowEnd = cores <= 2 || memory <= 2;
  const enableAnimations = !prefersReducedMotion && !veryLowEnd;

  // Blur is expensive; disable on low-end
  const enableBlur = !isLowEnd && !prefersReducedMotion;

  // Heavy glow shadows are expensive; disable on low-end
  const enableGlows = !isLowEnd;

  return {
    isLowEnd,
    prefersReducedMotion,
    enableAnimations,
    enableBlur,
    enableGlows,
  };
}

export function usePerformanceProfile(): PerformanceProfile {
  const [profile, setProfile] = useState<PerformanceProfile>(calculateProfile);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setProfile(calculateProfile());
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  return profile;
}

