// backend/middleware/auth.mjs

import jwt from 'jsonwebtoken';
import createError from "../utils/createError.js";


const auth = (req, res, next) => {
  // Get token from header
  const token = req.cookies.accessToken;  

  // Check if token doesn't exist
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add user from token payload to request object
    req.user = decoded.user;
    next(); // Call next middleware
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default auth;
