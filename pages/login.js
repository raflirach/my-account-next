import Toggle from "../components/Toggle";

export default function login() {
  return (
    <div className="grid grid-cols-2 dark:text-slate-800 text-white">
      <div className="absolute flex mt-2 ml-2 rounded-full bg-sky-500 h-8 w-8 items-center justify-center">
        <Toggle />
      </div>
      <div className="flex h-screen w-full bg-slate-900 dark:bg-gray-100 justify-center items-center">
        <div className="flex flex-col w-full justify-center items-center gap-4">
          <div className="flex w-1/2 items-center gap-3">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <input
              className="login-input"
              type="text"
            />
          </div>
          <div className="flex w-1/2 items-center gap-3">
            <input
              className="login-input"
              type="text"
            />
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <button className="btn-login">
            Login
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex h-screen w-full justify-center items-center"></div>
    </div>
  );
}
