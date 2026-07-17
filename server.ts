import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Log incoming requests to help with debugging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// CDN redirects for large library files
app.get('/css/sweetalert2.min.css', (req, res) => {
  res.redirect('https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css');
});

app.get('/css/swiper-bundle.min.css', (req, res) => {
  res.redirect('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
});

app.get('/css/all.min.css', (req, res) => {
  res.redirect('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
});

app.get('/css/bootstrap-icons.min.css', (req, res) => {
  res.redirect('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');
});

app.get('/js/sweetalert2.all.min.js', (req, res) => {
  res.redirect('https://cdn.jsdelivr.net/npm/sweetalert2@11');
});

app.get('/js/swiper-bundle.min.js', (req, res) => {
  res.redirect('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
});

// Handle local static assets
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));

// Smart redirect for missing images under /images/* to the original high-speed CDN
app.get('/images/*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const filepath = path.join(__dirname, req.path);
  if (fs.existsSync(filepath)) {
    return res.sendFile(filepath);
  }
  
  // Extract filename from path
  const filename = req.path.replace(/^\/images\//, '');
  res.redirect(`https://cdn.insulabuild.com/reservatoriodedopamina.com.br/${filename}`);
});

// Smart fallback for generated assets under src/assets/images or assets/images
const serveGeneratedFallback = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const requestedPath = req.path;
  const filename = path.basename(requestedPath);
  const localDir = path.join(__dirname, 'src/assets/images');
  const localFilepath = path.join(localDir, filename);

  if (fs.existsSync(localFilepath)) {
    return res.sendFile(localFilepath);
  }

  // Fallback to the first available image in src/assets/images if file does not exist
  try {
    if (fs.existsSync(localDir)) {
      const files = fs.readdirSync(localDir).filter(f => f.endsWith('.png'));
      if (files.length > 0) {
        // Return a stable fallback from the available images
        const fallbackFile = files[Math.abs(filename.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % files.length];
        return res.sendFile(path.join(localDir, fallbackFile));
      }
    }
  } catch (err) {
    console.error('Error serving fallback image:', err);
  }

  res.status(404).send('Image not found');
};

app.get('/src/assets/images/*', serveGeneratedFallback);
app.get('/assets/images/*', serveGeneratedFallback);

// Serve static directories from root
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));
app.use('/src/assets', express.static(path.join(__dirname, 'src/assets')));

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback: Serve index.html for any undefined routes to support single-page behaviors if needed
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
