import {v2 as cloudinary } from "cloudinary"
import { response } from "express";
import fs from "fs"

          
cloudinary.config({ 
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
  api_key: 'process.env.CLOUDINARY_API_KEY', 
  api_secret: 'process.env.CLOUDINARY_API_SECRET' 
});
const uploadOnCloundinary= async (localFilePath) => {
    try{
        if(!localFilePath) return null;
        // upload the file on cloudinary
        cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        console.log("file is uploaded successfully", response.url);
return response;
    }catch(error){
fs.unlinkSync(localFilePath)
// remove the localy saved temporary file as the upload operation got failed
    }
}
cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });

  export {uploadOnCloundinary}