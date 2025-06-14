import { ref, Ref, watch } from "vue";
import { PrimeVueConfiguration } from "primevue";
import { Preset } from "@primeuix/themes/types";
import { definePreset, updatePrimaryPalette, updateSurfacePalette, useTheme } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import Material from "@primeuix/themes/material";
import Lara from "@primeuix/themes/lara";
import Nora from "@primeuix/themes/nora";

interface ThemeColor {
  name: ThemeColorName;
  palette: ThemeColorPalette;
}

enum ThemeColorName {
  // Primary colors
  emerald = "Smaragd", // Emerald
  green = "Groen", // Green
  lime = "Limoen", // Lime
  orange = "Oranje", // Orange
  amber = "Amber", // Amber
  yellow = "Geel", // Yellow
  teal = "Teal", // Teal
  cyan = "Cyaan", // Cyan
  blue_HU = "HU Blauw", // HU Blue
  blue = "Blauw", // Blue
  indigo = "Indigo", // Indigo
  violet = "Violet", // Violet
  purple = "Paars", // Purple
  fuchsia = "Fuchsia", // Fuchsia
  pink = "Roze", // Pink
  red_HU = "HU Rood", // HU Red
  // Surface colors
  slate = "Slate", // Slate
  gray = "Grijs", // Gray
  zinc = "Zinc", // Zinc
  neutral = "Neutraal", // Neutral
  stone = "Steen", // Stone
  soho = "Soho", // Soho
  viva = "Viva", // Viva
  ocean = "Oceaan", // Ocean
}

interface ThemeColorPalette {
  [key: string]: string;
}

enum ThemeName {
  aura = "aura",
  material = "material",
  lara = "lara",
  nora = "nora",
}

interface ThemeRecord {
  label: string;
  name: ThemeName;
  preset: Preset;
}

interface ThemeState {
  theme: ThemeRecord;
  colors: {
    primary: ThemeColor;
    surface: ThemeColor;
  };
  darkMode: {
    active: boolean;
    visible: boolean;
    selector: string;
  };
  ripple: {
    active: boolean;
    visible: boolean;
  };
  rtl: {
    active: boolean;
    visible: boolean;
  };
}

interface ThemeStateComposable {
  defaultConfig: PrimeVueConfiguration;
  themeState: Ref<ThemeState>;
  availableThemes: ThemeRecord[];
  primaryColors: ThemeColor[];
  surfaceColors: ThemeColor[];
  initializeConfig: (primeVueInstance: PrimeVueInstance) => void;
  setPrimaryColor: (color: ThemeColor) => void;
  setSurfaceColor: (color: ThemeColor) => void;
  setDarkMode: (active: boolean) => void;
  setRipple: (active: boolean) => void;
  setRtl: (active: boolean) => void;
}

const primaryColors: ThemeColor[] = [
  {
    name: ThemeColorName.emerald,
    palette: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22",
    },
  },
  {
    name: ThemeColorName.green,
    palette: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16",
    },
  },
  {
    name: ThemeColorName.lime,
    palette: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
      950: "#1a2e05",
    },
  },
  {
    name: ThemeColorName.orange,
    palette: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407",
    },
  },
  {
    name: ThemeColorName.amber,
    palette: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03",
    },
  },
  {
    name: ThemeColorName.yellow,
    palette: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      950: "#422006",
    },
  },
  {
    name: ThemeColorName.teal,
    palette: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e",
    },
  },
  {
    name: ThemeColorName.cyan,
    palette: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344",
    },
  },
  {
    name: ThemeColorName.blue_HU,
    palette: {
      50: "#C2EEFF",
      100: "#AEE8FF",
      200: "#85DCFF",
      300: "#5CD1FF",
      400: "#34C5FF",
      500: "#0BBAFF",
      600: "#00A1E1",
      700: "#0079A9",
      800: "#005171",
      900: "#002939",
      950: "#00151D",
    },
  },
  {
    name: ThemeColorName.blue,
    palette: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554",
    },
  },
  {
    name: ThemeColorName.indigo,
    palette: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b",
    },
  },
  {
    name: ThemeColorName.violet,
    palette: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065",
    },
  },
  {
    name: ThemeColorName.purple,
    palette: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764",
    },
  },
  {
    name: ThemeColorName.fuchsia,
    palette: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e",
    },
  },
  {
    name: ThemeColorName.pink,
    palette: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724",
    },
  },
  {
    name: ThemeColorName.red_HU,
    palette: {
      50: "#F9D0CF",
      100: "#F7BFBD",
      200: "#F39B98",
      300: "#EF7774",
      400: "#EA544F",
      500: "#E6302B",
      600: "#C21B17",
      700: "#901411",
      800: "#5E0D0B",
      900: "#2B0605",
      950: "#120302",
    },
  },
]

const surfaceColors: ThemeColor[] = [
  {
    name: ThemeColorName.slate,
    palette: {
      0: "#ffffff",
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617",
    },
  },
  {
    name: ThemeColorName.gray,
    palette: {
      0: "#ffffff",
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
      950: "#030712",
    },
  },
  {
    name: ThemeColorName.zinc,
    palette: {
      0: "#ffffff",
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b",
    },
  },
  {
    name: ThemeColorName.neutral,
    palette: {
      0: "#ffffff",
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a",
    },
  },
  {
    name: ThemeColorName.stone,
    palette: {
      0: "#ffffff",
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
      950: "#0c0a09",
    },
  },
  {
    name: ThemeColorName.soho,
    palette: {
      0: "#ffffff",
      50: "#f4f4f4",
      100: "#e8e9e9",
      200: "#d2d2d4",
      300: "#bbbcbe",
      400: "#a5a5a9",
      500: "#8e8f93",
      600: "#77787d",
      700: "#616268",
      800: "#4a4b52",
      900: "#34343d",
      950: "#1d1e27",
    },
  },
  {
    name: ThemeColorName.viva,
    palette: {
      0: "#ffffff",
      50: "#f3f3f3",
      100: "#e7e7e8",
      200: "#cfd0d0",
      300: "#b7b8b9",
      400: "#9fa1a1",
      500: "#87898a",
      600: "#6e7173",
      700: "#565a5b",
      800: "#3e4244",
      900: "#262b2c",
      950: "#0e1315",
    },
  },
  {
    name: ThemeColorName.ocean,
    palette: {
      0: "#ffffff",
      50: "#fbfcfc",
      100: "#F7F9F8",
      200: "#EFF3F2",
      300: "#DADEDD",
      400: "#B1B7B6",
      500: "#828787",
      600: "#5F7274",
      700: "#415B61",
      800: "#29444E",
      900: "#183240",
      950: "#0c1920",
    },
  },
]

const availableThemes: ThemeRecord[] = [
  {
    name: ThemeName.aura,
    label: "Aura",
    preset: Aura,
  },
  {
    name: ThemeName.material,
    label: "Material",
    preset: Material,
  },
  {
    name: ThemeName.lara,
    label: "Lara",
    preset: Lara,
  },
  {
    name: ThemeName.nora,
    label: "Nora",
    preset: Nora,
  },
]

// Helper function to get stored boolean values with default if not existing.
function getStoredBoolean(key: string, defaultValue: boolean): boolean {
  const value = localStorage.getItem(key);
  return value !== null && value === "true" ? true : (value === null ? defaultValue : false);
}

// Declare and initialize the appState variable to hold all settings regarding theming, color schemes, and others.
// Defaults for theming, colors and other setting, using stored values 1st and initials or fallbacks 2nd or 3th.
let themeState: Ref<ThemeState> = ref({
  theme:
      availableThemes.find((theme) => theme.name === localStorage.getItem("themeName"))! || 
      availableThemes.find((theme) => theme.name === ThemeName.material)! || 
      availableThemes[0],
  colors: {
    primary: 
      primaryColors.find((color) => color.name === localStorage.getItem("primaryColorName"))! || 
      primaryColors.find((color) => color.name === ThemeColorName.blue_HU)! || 
      primaryColors[0],
    surface:
      surfaceColors.find((color) => color.name === localStorage.getItem("surfaceColorName"))! || 
      surfaceColors.find((color) => color.name === ThemeColorName.slate)! || 
      surfaceColors[0],
  },
  darkMode: {
    active: getStoredBoolean("darkModeActive", false),
    visible: getStoredBoolean("darkModeVisible", true),
    selector: "p-dark",
  },
  ripple: {
    active: getStoredBoolean("rippleActive", false),
    visible: getStoredBoolean("rippleVisible", true),
  },
  rtl: {
    active: getStoredBoolean("rtlActive", false),
    visible: getStoredBoolean("rtlVisible", true),
  },
});

const defaultConfig: PrimeVueConfiguration = {
  theme: {
    preset: definePreset(themeState.value.theme.preset, {
      semantic: {
        primary: themeState.value.colors.primary.palette,
        surface: themeState.value.colors.surface.palette,
      }
    }),
    options: {
      darkModeSelector: "." + themeState.value.darkMode.selector,
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue'
      }
    },
    ripple: themeState.value.ripple.active,
  }
}

// This is a reference variable for the global PrimeVue instance (so config properties like Ripple can be set to it).
// It's exposed as setPrimeVueInstance to be imported in main.ts where the global $primevue must be passed to it.
interface PrimeVueInstance {
  config: PrimeVueConfiguration;
}
let $primevue: PrimeVueInstance | null = null;

// Main export function to dynamically set theming, colors, and other config settings with variables and functions.
export function useThemeState(): ThemeStateComposable {
  watch(() => themeState.value.theme, (newTheme) => {
      if (newTheme) {
        setTheme(newTheme);
        setPrimaryColor(themeState.value.colors.primary);
        setSurfaceColor(themeState.value.colors.surface);
      }
    },
  )
  function setPrimaryColor(color: ThemeColor): void {
    if (color) {
      updatePrimaryPalette(color.palette);
      themeState.value.colors.primary = color;
      localStorage.setItem("primaryColorName", color.name);
    }
  }
  function setSurfaceColor(color: ThemeColor): void {
    if (color) {
      updateSurfacePalette(color.palette);
      themeState.value.colors.surface = color;
      localStorage.setItem("surfaceColorName", color.name);
    }
  }
  function setTheme(newTheme: ThemeRecord): void {
    if (localStorage.getItem("themeName") != newTheme.name) {
      useTheme({
        preset: newTheme.preset,
      });
      localStorage.setItem("themeName", newTheme.name);
      if (newTheme.name === ThemeName.material) {
        themeState.value.ripple.active = true;
        themeState.value.ripple.visible = true;
      } else {
        themeState.value.ripple.active = false;
        themeState.value.ripple.visible = false;
      }
      localStorage.setItem("rippleActive", themeState.value.ripple.active.toString());
      localStorage.setItem("rippleVisible", themeState.value.ripple.visible.toString());
    }
  }
  
  watch(() => themeState.value.darkMode.active, (active) => {
      setDarkMode(active);
    },
  )
  function setDarkMode(active: boolean): void {
    if (active) {
      document.documentElement.classList.add(themeState.value.darkMode.selector);
    } else {
      document.documentElement.classList.remove(themeState.value.darkMode.selector);
    }
    localStorage.setItem("darkModeActive", active.toString());
  }

  watch(() => themeState.value.ripple.active, (active) => {
      setRipple(active);
    },
  )
  function setRipple(active: boolean): void {
    if ($primevue) {
      $primevue.config.ripple = active;
    }
    localStorage.setItem("rippleActive", active.toString());
  }
  
  watch(() => themeState.value.rtl.active, (active) => {
      setRtl(active);
    },
  )
  function setRtl(active: boolean): void {
    document.documentElement.dir = active ? "rtl" : "ltr";
    localStorage.setItem("rtlActive", active.toString()
    )
  }

  function initializeConfig(primeVue: PrimeVueInstance) {
    $primevue = primeVue;
    ((ts) => {
      setTheme(ts.theme);
      setPrimaryColor(ts.colors.primary);
      setSurfaceColor(ts.colors.surface);
      setDarkMode(ts.darkMode.active);
      setRipple(ts.ripple.active);
      setRtl(ts.rtl.active);
    })(themeState.value);
  }

  return {
    defaultConfig,
    themeState,
    availableThemes,
    primaryColors,
    surfaceColors,
    initializeConfig,
    setPrimaryColor,
    setSurfaceColor,
    setDarkMode,
    setRipple,
    setRtl,
  };
}
