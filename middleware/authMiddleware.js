import JWT from "jsonwebtoken";
const jwtToken = "abcdefghij";
import userModel from "../Model/userModel.js";
//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(req.headers.authorization, jwtToken);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};


//admin acceess
export const isAdmin = async (req, res, next) => {
    try {
      const user = await userModel.findById(req.user._id);


      if (!req.user) {
        return res.status(401).send({
          success: false,
          message: "Unauthorized Access - Missing user information",
        });
      }
      
        
      if (!user || user.role !== 1) {
        return res.status(401).send({
          success: false,
          message: "UnAuthorized Access",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        error,
        message: "Error in admin middelware",
      });
    }
  };
