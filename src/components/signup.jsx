import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Signup = ({ theme }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState({ email: false, password: false });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-80 mt-20 flex justify-center items-center">
      <form className="flex flex-col gap-4 rounded-lg p-4 bg-transparent w-60 min-h-80 md:w-80 lg:w-100 shadow-sm shadow-gray-500">
        <h2 className="text-3xl font-bold mb-4 text-center">Signup</h2>
        <div className="relative w-full">
          <label
            className={`absolute left-3 transition-all duration-300 ${
              isFocused.email || email
                ? "-top-3 text-sm text-purple-600"
                : "top-2 text-gray-400"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused({ ...isFocused, email: true })}
            onBlur={() => setIsFocused({ ...isFocused, email: email.length > 0 })}
            onMouseEnter={() => setIsFocused({ ...isFocused, email: true })}
            onMouseLeave={() => setIsFocused({ ...isFocused, email: email.length > 0 })}
            className={`w-full px-4 pt-4 pb-2 rounded-lg focus:outline-none 
              ${theme === "DARK" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
          />
        </div>
        <div className="relative w-full mt-4">
          <label
            className={`absolute left-3 transition-all duration-300 ${
              isFocused.password || password
                ? "-top-3 text-sm text-purple-600"
                : "top-2 text-gray-400"
            }`}
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setIsFocused({ ...isFocused, password: true })}
            onBlur={() => setIsFocused({ ...isFocused, password: password.length > 0 })}
            onMouseEnter={() => setIsFocused({ ...isFocused, password: true })}
            onMouseLeave={() => setIsFocused({ ...isFocused, password: password.length > 0 })}
            className={`w-full px-4 pt-4 pb-2 rounded-lg focus:outline-none 
              ${theme === "DARK" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500 hover:text-purple-600"
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>

        <button className="px-4 py-2 w-full mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-600 transition">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
    