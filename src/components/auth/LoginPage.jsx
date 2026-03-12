"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaChevronRight,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const res = await signIn("credentials", {
      email: payload.email,
      password: payload.password,
      redirect: false,
    });
    console.log(res);

    if (res?.error) {
      // This will trigger if loginUser returns null
      Swal.fire("Error", "Invalid email or password", "error");
      setLoading(false);
    } else {
      // Success!
      Swal.fire("Success", "Successfully loggedIn", "success");
      router.push("/");
      router.refresh(); // Refresh to update the navbar/session state
    }
  };
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-primary">Welcome Back!</h2>
            <p className="text-base-content/60 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="form-control">
              <label className="label font-medium py-1 text-sm">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-base-content/40">
                  <FaEnvelope />
                </span>
                <input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="input input-bordered w-full pl-10 focus:input-primary"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label font-medium py-1 text-sm">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-base-content/40">
                  <FaLock />
                </span>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-10 pr-10 focus:input-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-base-content/40 hover:text-primary"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`btn btn-primary btn-block mt-4 ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "" : "Sign In"}
            </button>
          </form>

          <SocialLogin />

          <div className="divider">New here?</div>

          <button
            onClick={() => router.push("/register")}
            className="btn btn-outline btn-block gap-2 group"
          >
            Create an Account{" "}
            <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
