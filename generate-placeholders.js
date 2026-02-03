const fs = require('fs');
const path = require('path');

const images = [
  'celtic-hero.jpg',
  'celtic-card.jpg',
  'celtic-1.jpg',
  'celtic-2.jpg',
  'sponsor-1.jpg',
  'caribbean-hero.jpg',
  'caribbean-card.jpg',
  'caribbean-1.jpg',
  'christmas-hero.jpg',
  'christmas-card.jpg',
  'christmas-1.jpg',
  'spring-hero.jpg',
  'spring-card.jpg',
  'pattern.png'
];

const colors = [
  '#166534', // green-700
  '#15803d', // green-600
  '#14532d', // green-900
  '#1e40af', // blue-800
  '#b91c1c', // red-700
  '#a16207', // yellow-700
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function createSVG(text, width, height) {
  const color = getRandomColor();
  return `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dy=".3em">${text}</text>
</svg>
  `.trim();
}

const publicDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

images.forEach(img => {
  const name = img.split('.')[0];
  // Determine size based on name hints
  let width = 800;
  let height = 600;
  
  if (name.includes('hero')) {
    width = 1920;
    height = 1080;
  } else if (name.includes('card')) {
    width = 800;
    height = 600;
  }

  const svgContent = createSVG(name, width, height);
  const filePath = path.join(publicDir, img.replace('.jpg', '.svg').replace('.png', '.svg')); // Save as SVG for simplicity, though file extension in code implies jpg/png. 
  
  // Note: Next.js Image component handles SVGs fine, but if the code strictly expects .jpg, we might have an issue if we just save as .svg but keep the extension .jpg (browsers might complain).
  // However, for a mock generator, saving valid SVG content into a file named .jpg works in many browsers, but it's hacky.
  // Better approach: Update the mock data to point to .svg or just save as .svg and rely on the browser to render it if I update the code.
  // BUT the user requirements said "clean code", so let's update the mock data to point to .svg OR just create actual .jpg files? Creating .jpgs requires sharp or canvas, which might not be installed.
  // I will save them as .svg and update the mock data to use .svg extensions? No, that requires changing data.ts again.
  // I will save them as .svg files but keep the name. 
  // Wait, if I use Next.js <Image>, it needs to know the dimensions or be imported.
  // I'll stick to creating SVGs and naming them with .svg extension, then I will update the mock data to reference .svg files. This is cleaner.
  
  fs.writeFileSync(path.join(publicDir, img.replace(/\.(jpg|png)$/, '.svg')), svgContent);
});

console.log('Placeholder images generated in public/images');
