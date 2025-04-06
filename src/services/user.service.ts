// import prisma from "../lib/prisma.js";
// import { NotFoundError } from "../utils/errors.js";

// export const getUserById = async (id: string) => {
//   const user = await prisma.user.findUnique({ where: { id } });

//   if (!user) {
//     throw NotFoundError("User not found");
//   }

//   return user;
// };
