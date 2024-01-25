const admin = require("firebase-admin");
// import * as serviceAccount from '../firbase/serviceAccountKey.json';
const serviceAccount = require("../firbase/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // other configurations...
});

const firebaseAuthMiddleware = async (req, res, next) => {
  try {
    console.log("Headers:", req.headers);
    // Extract the Firebase ID token from the Authorization header
    const authorizationHeader = req.header("Authorization");
    console.log("Authorization Header:", authorizationHeader);

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      console.error("Invalid or missing Authorization header");
      return res.status(401).send({ error: "Unauthorized" });
    }

    console.log("ID Token:", idToken);

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      throw new Error("Invalid or missing Authorization header");
    }

    const idToken = authorizationHeader.split(" ")[1];

    // Verify and decode the Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    // Attach the decoded token to the request object for later use in controllers
    req.user = decodedToken;

    // Continue with the next middleware or route
    next();
  } catch (error) {
    console.error("Firebase Authentication Error:", error.message);
    res.status(401).send({ error: "Unauthorized" });
  }
};

module.exports = firebaseAuthMiddleware;
