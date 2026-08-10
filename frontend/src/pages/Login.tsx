type LoginPageProps = {
  onSwitchToRegister?: () => void;
};

function LoginPage({ onSwitchToRegister }: LoginPageProps) {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#f5f5f3] px-4 py-8">
      <div className="w-full max-w-[420px]">
        <h1 className="mb-6 text-[3rem] font-semibold tracking-[-0.07em] text-[#1f1f2a]">
          Login
        </h1>

        <div className="space-y-5">
          <label className="block text-[1.05rem] font-medium text-[#2d2d38]">
            <span className="mb-2 block">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-[#d7d4d1] bg-white px-3 py-3 text-base text-[#2f2d3a] outline-none placeholder:text-[#a09ca7] focus:border-[#6d60d8]"
            />
          </label>

          <label className="block text-[1.05rem] font-medium text-[#2d2d38]">
            <span className="mb-2 block">Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[#d7d4d1] bg-white px-3 py-3 text-base text-[#2f2d3a] outline-none placeholder:text-[#a09ca7] focus:border-[#6d60d8]"
            />
            <div className="mt-2 text-right">
              <button
                type="button"
                className="border-0 bg-transparent p-0 text-sm font-medium text-[#6d60d8]"
              >
                Forgot password?
              </button>
            </div>
          </label>

          <button
            type="button"
            className="mt-2 w-full rounded-lg bg-[#6d60d8] px-4 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-[#5d50d0]"
          >
            Login
          </button>

          <p className="mt-4 text-center text-base text-[#4d4a5e]">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="border-0 bg-transparent p-0 text-[#6d60d8] underline-offset-2 hover:underline"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
