import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/ErrorHandler.js";

export const authMiddleware = (req, res, next) => {

    const {token} = req.cookies;

    if(!token) return next(new ErrorHandler(401, "Unauthorized User"))

    const isIdeal = jwt.verify(token, process.env.JWT_SECRET)

    if(!isIdeal) return next(new ErrorHandler (401, "Unauthorized User"))

    req.id = isIdeal.id

    next();

}
