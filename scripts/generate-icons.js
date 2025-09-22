const { writeFileSync, readFileSync } = require('fs');
const sharp = require('sharp');

async function generateIcons() {
  const inputImage = 'public/DevBraze Logo Blue Border.png';
  const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
  
  try {
    for (const size of sizes) {
      await sharp(inputImage)
        .resize(size, size)
        .png()
        .toFile(`public/icon-${size}x${size}.png`);
      
      console.log(`Generated icon-${size}x${size}.png`);
    }
    
    // Generate favicon.ico
    await sharp(inputImage)
      .resize(32, 32)
      .png()
      .toFile('public/favicon-32x32.png');
      
    await sharp(inputImage)
      .resize(16, 16)
      .png()
      .toFile('public/favicon-16x16.png');
      
    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

if (require.main === module) {
  generateIcons();
}

module.exports = generateIcons;