import dotenv from 'dotenv';
dotenv.config();
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const pictureUploader = async (req, res, next) => {
    const { kep1, kep2, kep3 } = req.body;
    const results1 = await cloudinary.uploader.upload(kep1);
    const url1 = cloudinary.url(results1.public_id);
    const results2 = await cloudinary.uploader.upload(kep2);
    const url2 = cloudinary.url(results2.public_id);
    const results3 = await cloudinary.uploader.upload(kep3);
    const url3 = cloudinary.url(results3.public_id);

    req.body.kepek = [url1, url2, url3];

    next();
};

export default pictureUploader;