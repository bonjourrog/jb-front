import {defineConfig} from 'vitest/config';
// export default defineConfig({
//     test:{
//         environment:'jsdom',
//     }
// })
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins:[react()],
    test:{
        globals:true,
        environment:'jsdom',
        setupFiles:'./test/vitest.setup.ts',
        include: ['**/*.{test,spec}.{ts,tsx}'],
    }
})

