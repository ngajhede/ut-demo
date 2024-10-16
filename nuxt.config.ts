// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@uploadthing/nuxt"],
  uploadthing: {
    /**
     * Path to your router definition file
     * @default `~/server/uploadthing.ts`
     */
    routerPath: "~/server/uploadthing.ts",
    logLevel: "Info",
  },
});
