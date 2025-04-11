import{v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

import { v2 as cloudinary } from 'cloudinary';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
})
const uploadoncloudinary=async (filePath)=>{
    try{
        if (!filePath) return null
        cloudinary.uploader.upload(localpath, { resource_type: "auto" }, (error, result) => {
            if (error) {
                console.error('Error uploading to Cloudinary:', error);
                return null;
            }
            console.log('Upload successful! URL:', result.secure_url);
            return result.secure_url;
        })
    }
    catch (err) {
        fs.unlinkSync(localpath) // Delete the file from local storage
        console.error('Error uploading to Cloudinary:', err);
        return null;
    }


}})
export {uploadoncloudinary}
















