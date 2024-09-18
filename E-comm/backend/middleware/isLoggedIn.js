import { getTokenFromHeader } from "../utils/generateToken.js"
import { verifyJWT } from "../utils/verifyToken.js"

export const isLoggedIn = (req, res, next) => {
  //get the token header
  const token = getTokenFromHeader(req)
  //verify the token
  const decodedUser = verifyJWT(token)

  if (!decodedUser) {
    throw new Error("Inavlid/Expired token, please login again")
  } else {
  //save the user into req obj
    req.userAuthId = decodedUser?.id
    next()
  }
}