import { defineConfig } from "vite"

const Mode = process.env.APP_BASE_HREF || '';

export default defineConfig({
    base: "${Mode}",
    experimental: {
        renderBuiltUrl(filename, { hostType }) {
            return { relative: true }
        }
    }
})