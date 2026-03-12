import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-3 w-full mt-6">
      <div className="divider text-xs text-base-content/50 uppercase">
        Or continue with
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button className="btn btn-outline gap-2 border-base-300 hover:bg-base-200">
          <FcGoogle className="text-xl" />
          Google
        </button>
        <button className="btn btn-outline gap-2 border-base-300 hover:bg-base-200">
          <FaGithub className="text-xl" />
          GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
