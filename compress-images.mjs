import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, 'src', 'assets');
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const QUALITY = 80;

async function compressImage(filePath) {
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    console.log(`Processing: ${filePath}`);
    console.log(`  Original size: ${metadata.width}x${metadata.height}`);

    const needsResize = metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT;

    let pipeline = image;

    if (needsResize) {
      pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // For PNG files
    if (filePath.toLowerCase().endsWith('.png')) {
      await pipeline
        .png({ quality: QUALITY, compressionLevel: 9 })
        .toFile(filePath + '.tmp');
    }
    // For JPG/JPEG files
    else if (filePath.toLowerCase().match(/\.(jpg|jpeg)$/)) {
      await pipeline
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(filePath + '.tmp');
    }

    // Replace original file
    const fs = await import('fs');
    fs.unlinkSync(filePath);
    fs.renameSync(filePath + '.tmp', filePath);

    const newMetadata = await sharp(filePath).metadata();
    console.log(`  New size: ${newMetadata.width}x${newMetadata.height}`);
    console.log(`  ✓ Compressed successfully\n`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.isFile() && /\.(png|jpg|jpeg)$/i.test(entry.name)) {
        const stats = await stat(fullPath);
        const sizeInKB = stats.size / 1024;

        // Only compress if larger than 100KB
        if (sizeInKB > 100) {
          await compressImage(fullPath);
        } else {
          console.log(`Skipping ${fullPath} (already optimized: ${sizeInKB.toFixed(2)} KB)`);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
}

console.log('Starting image compression...\n');
processDirectory(ASSETS_DIR)
  .then(() => {
    console.log('All images processed successfully!');
  })
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });

