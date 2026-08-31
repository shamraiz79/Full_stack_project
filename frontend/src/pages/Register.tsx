import { useState } from "react";
import { type AuthUser, registerUser } from "../services/authService";

type RegisterPageProps = {
  onSwitchToLogin?: () => void;
  onRegisterSuccess?: (user: AuthUser, token?: string) => void;
};

function RegisterPage({
  onSwitchToLogin,
  onRegisterSuccess,
}: RegisterPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!name.trim() || !email.trim() || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await registerUser(name, email, password);
      setSuccessMessage(response.message || "Registered successfully!");

      if (response.user) {
        setTimeout(() => {
          if (onRegisterSuccess) {
            onRegisterSuccess(response.user!, response.token);
          } else if (onSwitchToLogin) {
            onSwitchToLogin();
          }
        }, 1200);
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to register. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#f5f5f3] px-4 py-8">
      <div className="w-full max-w-[420px]">
        <h1 className="mb-6 text-[3rem] font-semibold tracking-[-0.07em] text-[#1f1f2a]">
          Register
        </h1>

        {errorMessage && (
          <div className="mb-5 rounded-lg border border-[#f5c6cb] bg-[#f8d7da] px-4 py-3 text-sm text-[#721c24]">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="mb-5 rounded-lg border border-[#c3e6cb] bg-[#d4edda] px-4 py-3 text-sm text-[#155724]">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block text-[1.05rem] font-medium text-[#2d2d38]">
            <span className="mb-2 block">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full rounded-lg border border-[#d7d4d1] bg-white px-3 py-3 text-base text-[#2f2d3a] outline-none placeholder:text-[#a09ca7] focus:border-[#6d60d8]"
            />
          </label>

          <label className="block text-[1.05rem] font-medium text-[#2d2d38]">
            <span className="mb-2 block">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-[#d7d4d1] bg-white px-3 py-3 text-base text-[#2f2d3a] outline-none placeholder:text-[#a09ca7] focus:border-[#6d60d8]"
            />
          </label>

          <label className="block text-[1.05rem] font-medium text-[#2d2d38]">
            <span className="mb-2 block">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password (min 6 characters)"
              required
              className="w-full rounded-lg border border-[#d7d4d1] bg-white px-3 py-3 text-base text-[#2f2d3a] outline-none placeholder:text-[#a09ca7] focus:border-[#6d60d8]"
            />
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 flex w-full items-center justify-center rounded-lg bg-[#6d60d8] px-4 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-[#5d50d0] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Creating account...
              </span>
            ) : (
              "Register"
            )}
          </button>

          <p className="mt-4 text-center text-base text-[#4d4a5e]">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="border-0 bg-transparent p-0 text-[#6d60d8] underline-offset-2 hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </main>
  );
}

export default RegisterPage;
