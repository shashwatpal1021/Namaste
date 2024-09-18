import jwt from 'jsonwebtoken';

export const verifyJWT = (token) => {
  return jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
    if (err) {
      return false;
    } else {
      return decode;
    }
  })
}