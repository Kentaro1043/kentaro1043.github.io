// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.kentaro1043.com",
  integrations: [mdx(), sitemap(), react(), icon()],

  // https://docs.astro.build/en/guides/images/#default-image-service
  // 何故かsharpが使えなかったので回避策
  // TODO: sharpを直せたら削除
  image: {
    service: passthroughImageService(),
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
