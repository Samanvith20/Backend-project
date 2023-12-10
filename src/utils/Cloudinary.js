import {v2} from "cloudinary";
import fs from "fs";
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
  const Cloudinary = async (localFilepath)=>{
    try {
          if(!localFilepath) return null
          // upload file on cloudinary
          const response= await v2.uploader.upload(localFilepath,{
                 resource_type: "auto",
          })
          // If file has been uploaded successfully
          // console.log(response.secure_url)
          return response
    } catch (error) {
  fs.unlinkSync(localFilepath) // remove temp file
         return null
    }
  }