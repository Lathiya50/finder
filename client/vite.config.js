import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   __APP_ENV__: JSON.stringify(env.APP_ENV),
  // },
});

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");

//   return {
//     plugins: [react()],
//     define: {
//       __APP_ENV__: env.APP_ENV,
//     },

//     // rest of Vite config
//   };
// });
