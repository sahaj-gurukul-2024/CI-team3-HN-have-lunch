import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< Updated upstream
const Mode = process.env.APP_BASE_HREF || '';

export default defineConfig({
    base: "${Mode}",
    experimental: {
        renderBuiltUrl(filename, { hostType }) {
            return { relative: true }
        }
    }
})
=======
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> Stashed changes
