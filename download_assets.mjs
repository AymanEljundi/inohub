import fs from 'fs';
import https from 'https';

const logos = [
  { url: 'https://techstorelb.com/wp-content/uploads/2024/03/tech-store-logo-color.png', dest: 'public/images/logo.png' },
  { url: 'https://techstorelb.com/wp-content/uploads/2024/08/tech-store-logo-white.png.webp', dest: 'public/images/logo-white.png' }
];

if (!fs.existsSync('public/images')) {
  fs.mkdirSync('public/images', { recursive: true });
}

logos.forEach(logo => {
  const file = fs.createWriteStream(logo.dest);
  https.get(logo.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${logo.dest}`);
    });
  });
});
