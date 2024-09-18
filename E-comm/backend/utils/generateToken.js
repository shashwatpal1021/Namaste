import jwt from "jsonwebtoken"

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: "1d" })
}

const getTokenFromHeader = (req) => {
  const token = req?.headers?.cookie?.split("=")[1]
  if (token === undefined) {
    return 'No token found in cookies'
  } else {
    return token;
  }
}

export { generateToken, getTokenFromHeader };