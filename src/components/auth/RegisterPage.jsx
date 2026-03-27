"use client";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaEye,
  FaEyeSlash,
  FaChevronLeft,
} from "react-icons/fa";

import { useRouter, useSearchParams } from "next/navigation";
import { postUser } from "@/actions/server/auth";
import SocialLogin from "./SocialLogin";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const callback = params.get("callbackUrl") || "/";

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const result = await postUser(payload);
      if (result.acknowledged) {
        const result = await signIn("credentials", {
          email: payload.email,
          password: payload.password,
          redirect: false,
          callbackUrl: callback,
        });
        if (result.ok) {
          Swal.fire("Success", "Successfully loggedIn", "success");
          router.push(callback);
        }
      }
    } catch (error) {
      console.error("Registration failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-primary">Join Us!</h2>
            <p className="text-base-content/60 mt-2">
              Start your learning journey today
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="form-control">
              <label className="label font-medium py-1 text-sm">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-base-content/40">
                  <FaUser />
                </span>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full pl-10 focus:input-secondary"
                  required
                />
              </div>
            </div>

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
                  className="input input-bordered w-full pl-10 focus:input-secondary"
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
                  className="input input-bordered w-full pl-10 pr-10 focus:input-secondary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-base-content/40 hover:text-secondary"
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
              {loading ? "" : "Register"}
            </button>
          </form>

          <SocialLogin />

          <div className="divider">Already a member?</div>

          <button
            onClick={() => router.push("/login")}
            className="btn btn-ghost btn-block gap-2"
          >
            <FaChevronLeft /> Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
