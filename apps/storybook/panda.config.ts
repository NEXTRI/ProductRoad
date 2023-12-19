import { defineConfig } from "@pandacss/dev";
import preset from "@system/preset";
import pandaPreset from "@pandacss/preset-panda";

export default defineConfig({
  watch: true,
  presets: [pandaPreset, preset],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "../../packages/components/**/*.tsx",
    "../../packages/components/**/stories/*.stories.tsx",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
