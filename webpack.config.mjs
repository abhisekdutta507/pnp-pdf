import path from 'path';
import { fileURLToPath } from 'url';
import TerserPlugin from 'terser-webpack-plugin';

// Helper to handle __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  entry: './web/index.js',
  experiments: {
    outputModule: true,
  },
  performance: {
    maxAssetSize: 4000000, // 4000000 Bytes = 4 MB
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'module',
  },
  resolve: {
    alias: {
      "@pdfjs": path.resolve(__dirname, 'pdfjs'),
      "@web": path.resolve(__dirname, 'web'),
    },
    extensions: ['.js', '.jsx', '.mjs'],
  },
  optimization: {
    minimize: false,
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          keep_fnames: false,
        },
      }),
    ],
  },
};
