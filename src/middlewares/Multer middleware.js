import multer from "multer";
// Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files

const storage = multer.diskStorage({
    destination: function (req, file, cb) 
    //destination is used to determine within which folder the uploaded files should be stored.
    {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) 
    //filename is used to determine what the file should be named inside the folder.
    {
         cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})