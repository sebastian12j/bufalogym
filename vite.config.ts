import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/',  // O ajusta a la ruta de tu subcarpeta si es necesario
  build: {
    outDir: 'dist',  // Especifica el directorio de salida
  },
})
