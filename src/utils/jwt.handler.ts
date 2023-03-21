import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || 'nonsecuresecret';


const generateToken = async (userId: string) => {
  const jwtGenerated = sign({ userId }, JWT_SECRET, {
    expiresIn: "2h"
  });

  return jwtGenerated
}

const vefiryToken = () => {

}

export {
  generateToken, vefiryToken
}