import { defineConfig } from "vite"

export default defineConfig({
    experimental: {
        renderBuiltUrl(filename, { hostType }) {
            return { relative: true }
        }
    }
})