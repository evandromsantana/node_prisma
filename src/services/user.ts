import { Prisma } from "../generated/prisma/client";
import { prisma } from "../libs/prisma"

export const createUser = async (data: Prisma.UserCreateInput) => { 
  try {
    return await prisma.user.create({ data });
  } catch (error) {
    return false;
  }
}

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
  try { 
    return await prisma.user.createMany({
      data: users,
      skipDuplicates: true
    });
  } catch(error) {
    return false;
  }
}

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({ 
    where: {
     OR: [
      {
        email: {
          endsWith: 'teste1@hotmail.com'
        }        
      },
      {
        email: {
          endsWith: 'teste2@hotmail.com'
        }
      }
     ]
    },
    select: {
      id: true,
      name: true,
      email: true,
      status: true,      
    }
  });
  return users;
}

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findFirst({
    where: { email },
    select: {
      id: true,
      name: true
    }
  });
  return user;
}