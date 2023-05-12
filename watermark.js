const sharp = require("sharp");
const fs = require("fs");
const path = require("path");


const inputDir = "/home/suren/Home/tomcat-uploads/2014";
const outputDir = "/home/suren/Home/uploadsWithWatermark";

sharp.cache(false);

// Set up the options for the watermark
const watermarkOptions = {
    left: 0,
    top: 0,
    blend: "over",
    tile: true
};


function processFile(file) {

    const input = `${this}/${file}`;
    const output = `${outputDir}${this}/${file}`;

    // Set up the watermark image
    let watermark = fs.readFileSync("./public/redwatermarkbig.svg");

    // Check if file name contains "thumb"
    // if (/thumb/i.test(file)) {
    //     watermark = fs.readFileSync('./public/redwatermarkthumb.svg');
    // }


    // sharp(input)
    //     .composite([{ input: watermark, ...watermarkOptions }])
    //     .toFormat('jpeg')
    //     .jpeg({ quality: 100 })
    //     .toFile(output, (err, info) => {
    //         if (err) throw err;
    //         console.log(`${input} has been watermarked`);
    //     });


    try {
        // Get image metadata
        sharp(input).metadata((err, metadata) => {

            console.error(`processing without metadata ${file}`);

            if(metadata?.width) {

                console.error(`processing with metadata ${file}`);

                // Check image dimensions
                if (metadata.width < 400) {
                    watermark = fs.readFileSync("./public/redwatermarkthumb.svg");
                    console.log('under 400');
                } else if (metadata.width >= 400 && metadata.width < 700) {
                    watermark = fs.readFileSync("./public/redwatermarkmd.svg");
                    console.log('between 400 - 700');
                } else if (metadata.width >= 900 && metadata.width < 2000) {
                    watermark = fs.readFileSync("./public/redwatermarkbig.svg");
                    console.log('between 900 - 2000');
                } else if (metadata.width >= 2000) {
                    watermark = fs.readFileSync("./public/redwatermarkxxl.svg");
                    console.log('between 2000+');
                }

                // Process image
                sharp(input)
                    .composite([{ input: watermark, ...watermarkOptions }])
                    .toFormat("jpeg")
                    .jpeg({ quality: 70 })
                    .toFile(output, (err, info) => {
                        console.log(`${input} has been watermarked`);
                    });

            }
        });

    } catch (err) {
        console.error(`Error processing ${file}: ${err.message}`);
    }
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

