const {v2: cloudinary} = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
    secure: true
});


function fileUpload(file) {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await cloudinary.uploader.upload(file, {
                filename_override: true,
                // use_filename: originalFilename,
                folder: "app",
                unique_filename: false
            })
            if (result) {
                resolve(result.secure_url)
            } else {
                resolve(null)
            }
        } catch (ex) {
            resolve(null)
        }
    })
}

module.exports = fileUpload