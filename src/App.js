import { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = Express();
 app.use(cors({
        origin: "process.env.CLIENT_URL",
        //  Necessary if your frontend and backend are hosted on different domains, and you want to allow or restrict cross-origin requests.
        credentials: true,
        //  Indicates whether the server should include credentials (such as cookies or HTTP authentication) in the CORS request.
    }));
app.use(cookieParser());
//cookie-parser is middleware for Express.js that parses and populates the req.cookies object with the cookies sent in the HTTP request.
app.use(express.json({limit: "30mb", extended: true}));
//  express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(express.urlencoded({limit: "30mb", extended: true}));
//  express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.static("public"));
// express.static() is a built-in middleware function in Express. It serves static files and is based on serve-static.
 export {app}