import React, { useState } from "react";

const LogIn = ({ onLogin }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(userId, password);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#312e81] to-black flex justify-center items-center flex-col px-4">
      <div className="flex justify-center items-center py-4">
        <h1 className="text-white text-7xl roboto-condensed">LOGIN</h1>
      </div>
      <form
        className="flex justify-center items-center flex-col w-full max-w-md py-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="User ID"
          className="roboto-condensed-inputs font-bold w-full m-3 rounded-full text-center p-1 bg-[#ffffff]/30 backdrop-blur-2xl text-white"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="roboto-condensed-inputs w-full m-3 rounded-full text-center p-1 bg-[#ffffff]/30 backdrop-blur-md text-white font-bold"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="flex w-full">
          <p className="text-white ml-auto underline cursor-pointer">
            Forgot Password?
          </p>
        </div>
        <button
          type="submit"
          className="roboto-condensed-inputs relative w-full m-3 rounded-full p-[3px] text-white bg-black gradient-border"
        >
          LogIn
        </button>
      </form>
      <div>
        <p className="text-white">
          Don't have an account?{" "}
          <a href="#" className="font-bold underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
