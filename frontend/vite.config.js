// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import dotenv from "dotenv";
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   define: {},
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
 base: "/",
 plugins: [react()],
 preview: {
  port: 1337,
  strictPort: true,
 },
 server: {
  port: 1337,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:1337",
 },
});