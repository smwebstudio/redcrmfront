const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Set up the watermark image
const watermark = fs.readFileSync('./public/redwatermark.svg');


const inputDir = '/home/suren/Home/uploads';
const outputDir = './output';

sharp.cache(false);

// Set up the options for the watermark
const watermarkOptions = {
    blend: 'over',
    tile: true,
};


function processFile(file) {
    // Check if file name contains "thumb"
    if (/thumb/i.test(file)) {
        console.log(`Skipping ${file}...`);
        return;
    }

    const input = `${this}/${file}`;
    const output = `${outputDir}${this}/${file}`;

    sharp(input)
        .composite([{ input: watermark, ...watermarkOptions }])
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(output, (err, info) => {
            if (err) throw err;
            console.log(`${input} has been watermarked`);
        });
}


function processDirectory(directory) {
    // Create output directory if it doesn't exist


    fs.readdir(directory, (err, files) => {
        if (err) throw err;

        files.forEach((file) => {
            const filePath = path.join(directory, file);

            fs.stat(filePath, (err, stats) => {
                if (err) throw err;

                if (stats.isDirectory()) {
                    // Check if output subdirectory exists and create it if needed
                    const outputSubdir = `${outputDir}/${directory}/${file}`;
                    if (!fs.existsSync(outputSubdir)) {
                        fs.mkdirSync(outputSubdir, { recursive: true });
                    }
                    processDirectory(filePath);
                } else {
                    processFile.call(directory, file);
                }
            });
        });
    });
};




processDirectory(inputDir);

// // Loop through each image and apply the watermark
// for (const image of images) {
//     sharp(image)
//         .composite([
//             { input: watermark, ...watermarkOptions, left: 5, top: 5 }, // move 240 pixels to the right
//         ]) // Apply the watermark
//         .toFormat('jpeg')
//         .toFile(`./uploadtest/${outputDir}/test48.jpg`, (err, info) => {
//             if (err) throw err;
//             console.log(`${image} has been watermarked`);
//         });
// }
