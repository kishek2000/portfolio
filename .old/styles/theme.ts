// Modern Neon Design System
export const colors = {
  primary: {
    50: "#f3ecff",
    100: "#e9d5ff",
    200: "#d6bcfa",
    300: "#c084fc",
    400: "#a855f7",
    500: "#9333ea",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
  },
  accent: {
    50: "#edfaff",
    100: "#d1f2ff",
    200: "#ade8ff",
    300: "#76daff",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  dark: "#0a0a0a",
  light: "#ffffff",
};

export const gradients = {
  primary: "linear-gradient(135deg, #a855f7 0%, #c084fc 50%, #e879f9 100%)",
  secondary: "linear-gradient(135deg, #06b6d4 0%, #38bdf8 50%, #0ea5e9 100%)",
  success: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
  warm: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #fde047 100%)",
  cool: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 50%, #c4b5fd 100%)",
  dark: "linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #a855f7 100%)",
  glass: "rgba(255, 255, 255, 0.05)",
  neon: "linear-gradient(135deg, #ff0080 0%, #7928ca 50%, #ff4081 100%)",
  electric: "linear-gradient(135deg, #00d4ff 0%, #9333ea 50%, #ff1cf7 100%)",
};

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  glow: "0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(168, 85, 247, 0.2)",
  glowPurple: "0 0 25px rgba(168, 85, 247, 0.4)",
  glowBlue: "0 0 25px rgba(56, 189, 248, 0.4)",
  glowPink: "0 0 25px rgba(236, 72, 153, 0.4)",
  neon: "0 0 35px rgba(255, 0, 128, 0.6), 0 0 70px rgba(121, 40, 202, 0.3)",
};

export const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  slideIn: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const glassEffect = {
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "16px",
};
