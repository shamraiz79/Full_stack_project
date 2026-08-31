const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  token?: string;
  user?: AuthUser;
};

export async function registerUser(
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("Failed to fetch")) {
      throw new Error(
        "Could not connect to the backend server. Please make sure the backend server is running on port 5000."
      );
    }
    throw error;
  }
}

export async function loginUser(
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("Failed to fetch")) {
      throw new Error(
        "Could not connect to the backend server. Please make sure the backend server is running on port 5000."
      );
    }
    throw error;
  }
}

