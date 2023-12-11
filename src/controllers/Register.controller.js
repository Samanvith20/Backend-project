import { AsyncHandler } from "../utils/AsyncHandler.js";
const registerUser=AsyncHandler(async(req,res)=>{
     res.send(res.json({
        message:"ok"
    }))
})
export default registerUser;