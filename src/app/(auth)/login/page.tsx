"use client";

import { useAuth } from "@/src/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { login, error, isLoading, user, isAuthLoaded } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user && isAuthLoaded) {
      router.replace("/");
    }
  }, [user, isAuthLoaded]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const username = form.get("username");
    const password = form.get("password");

    await login(username as string, password as string);
  };
  if (user) return null;
  if (!isAuthLoaded) return null;
  return (
    <div className="my-14 flex items-center justify-center">
      <div className="p-5 rounded-3xl shadow-2xl md:w-1/3">
        <form onSubmit={handleSubmit}>
          <h2 className="font-satoshi font-bold text-[36px] md:text-[44px] text-center">
            Login
          </h2>
          <div className="flex flex-col w-full items-center gap-3.5">
            <input
              type="text"
              placeholder="Username"
              className="rounded-[62px] p-2.5 border md:w-[66%]"
              name="username"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-[62px] p-2.5 border md:w-[66%]"
              name="password"
            />
            <p className="font-satoshi text-base text-red-600">{error}</p>
            <p className="text-[#0009] font-satoshi">
              You dont have an account?{" "}
              <Link
                href={"/register"}
                className="font-bold underline text-black"
              >
                Create One
              </Link>
            </p>
            <button className="bg-black text-white font-satoshi font-medium rounded-[62px] w-full md:w-1/3 p-2.5 text-[15px] cursor-pointer flex justify-center">
              {isLoading ? (
                <div className="w-6 h-6 rounded-full border-[3px] border-solid border-white border-r-transparent animate-spin"></div>
              ) : (
                "LOGIN"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
