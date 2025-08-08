#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Recursively find and remove all nextImageExportOptimizer directories
 * and the hash file created by next-image-export-optimizer
 */
function cleanOptimizedImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const hashFile = path.join(publicDir, 'next-image-export-optimizer-hashes.json');
  
  console.log('🧹 Cleaning next-image-export-optimizer data...');
  
  // Remove hash file
  if (fs.existsSync(hashFile)) {
    fs.unlinkSync(hashFile);
    console.log('✅ Removed hash file: next-image-export-optimizer-hashes.json');
  }
  
  // Recursively find and remove nextImageExportOptimizer directories
  function removeOptimizerDirs(dir) {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        if (item === 'nextImageExportOptimizer') {
          // Remove the entire nextImageExportOptimizer directory
          fs.rmSync(itemPath, { recursive: true, force: true });
          console.log(`✅ Removed: ${path.relative(publicDir, itemPath)}`);
        } else {
          // Recursively check subdirectories
          removeOptimizerDirs(itemPath);
        }
      }
    }
  }
  
  removeOptimizerDirs(publicDir);
  console.log('🎉 Cleanup complete!');
}

if (require.main === module) {
  cleanOptimizedImages();
}

module.exports = cleanOptimizedImages;
