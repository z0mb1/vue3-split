import Vue from "@vitejs/plugin-vue";
// import { defineConfig } from 'vite'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Vue3Split",
      formats: ["es", "cjs"], // adding 'umd' requires globals set to every external module
      fileName: (format) => `vue3-split.${format}.js`,
    },
    rollupOptions: {
      // external modules won't be bundled into your library
      external: ["vue"], // not every external has a global
      output: {
        // disable warning on src/index.ts using both default and named export
        exports: "named",
        // Provide global variables to use in the UMD build
        // for externalized deps (not useful if 'umd' is not in lib.formats)
        globals: {
          vue: "Vue",
        },
      },
    },
    emptyOutDir: false, // to retain the types folder generated by tsc
  },
});
