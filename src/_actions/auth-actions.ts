"use server";

import { auth } from "@/lib/auth";
import { LoginSchemaType, RegisterSchemaType } from "@/schemas/auth-schemas";

export const registerAction = async (data: RegisterSchemaType) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
    return {
      success: true,
      message: "Successfully registered, you can log in now!",
    };
  } catch (error) {
    const err = error as Error;
    console.error(err.message);
    return { success: false, message: err.message };
  }
};

export const loginAction = async (data: LoginSchemaType) => {
  try {
    await auth.api.signInEmail({
      body: {
        email: data.email,
        password: data.password,
      },
    });
    return { success: true, message: "Successfully logged in, redirecting..." };
  } catch (error) {
    const err = error as Error;
    console.error(err.message);
    return { success: false, message: err.message || "Unknown error found!" };
  }
};
