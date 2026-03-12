"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { email, password, name } = payload;

  // 1. Validate payload
  if (!email || !password || !name) {
    return { success: false, message: "Missing required fields" };
  }

  try {
    const userCollection = await dbConnect(collections.USERS);

    // 2. Fix the existence check
    const isExist = await userCollection.findOne({ email });
    if (isExist) {
      // Return an object so your frontend can explain WHY it failed
      return { success: false, message: "User already exists" };
    }

    // 3. Create user object
    const newUser = {
      provider: "credential",
      name,
      email,
      password: await bcrypt.hash(password, 14),
      role: "user",
      createdAt: new Date(),
    };

    // 4. Insert user
    const result = await userCollection.insertOne(newUser);

    if (result.acknowledged) {
      return {
        ...result,
        success: true,
        acknowledged: true,
        insertedId: result.insertedId.toString(),
      };
    }

    return { success: false, message: "Database failed to acknowledge" };
  } catch (error) {
    console.error("POST_USER_ERROR:", error);
    return { success: false, message: "Internal server error" };
  }
};

export const loginUser = async (payload) => {
  const { email, password } = payload;

  if (!email || !password) return null;

  try {
    const user = await dbConnect(collections.USERS).findOne({ email });

    // IF USER NOT FOUND: Return null
    if (!user) return null;

    const isMatched = await bcrypt.compare(password, user.password);

    // IF PASSWORD MATCHES: Return user object
    if (isMatched) {
      // Remove sensitive data before returning to session
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }

    // IF PASSWORD FAILS: Return null
    return null;
  } catch (error) {
    console.error("LOGIN_USER_ERROR:", error);
    return null;
  }
};
