import axios from "axios";
import Cookies from "js-cookie";

// Interface
interface SignInData {
  email: string;
  name: string;
  password: string;
  password2: string;
}

interface SignInAuth {
  hasError: boolean;
  message?: string;
}

const virtusApi = axios.create({
  baseURL: "/api",
});

const signInAuth = async ({
  email,
  name,
  password,
  password2,
}: SignInData): Promise<SignInAuth> => {
  try {
    await virtusApi.post("/user/register", {
      name,
      email,
      password,
      password2,
    });

    return {
      hasError: false,
      message: "Registration successful",
    };
  } catch (error) {
    console.error(error);

    if (axios.isAxiosError(error)) {
      return {
        hasError: true,
        message: "Email already registered",
      };
    }

    return {
      hasError: true,
      message: "Email already registered",
    };
  }
};

export { signInAuth };
