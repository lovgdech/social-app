import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import image from "/assets/images/sign-in-img.jpg";
import logo from "/assets/images/logo.png";
import onlyLogo from "/assets/images/only-logo.png";
import { useAuth } from "../store/auth-provider";

function SigninPage() {
  const navigate = useNavigate();

  const { setIsAuth } = useAuth();

  function handleSignin() {
    setIsAuth(true);
    localStorage.setItem("social_authentication", true);
    alert("Login success!");
    navigate("/");
  }

  return (
    <div className="h-screen w-screen min-h-[650px] flex items-center overflow-hidden">
      <div className="flex-1 h-full items-center justify-center">
        <div className="max-w-[550px] mx-auto p-8 w-full h-full flex flex-col justify-between items-center">
          <img className="h-8 object-contain mr-auto" src={logo} alt="logo" />

          <form className="w-full flex flex-col gap-5 mt-8">
            <h3 className="text-5xl font-bold mr-auto">Welcome back</h3>
            <p className="mr-auto">Welcome back! Please enter your details.</p>
            <input
              className="w-full h-11 text-base outline-none border-b border-slate-500 px-3 focus:bg-slate-50 placeholder:text-stone-500"
              type="text"
              placeholder="Username or email"
            />
            <input
              className="w-full h-11 text-base outline-none border-b border-slate-500 px-3 focus:bg-slate-50 placeholder:text-stone-500"
              type="password"
              placeholder="Password"
            />

            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <input
                  id="remember"
                  type="checkbox"
                  placeholder="Remember me"
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link className="hover:underline text-sm" to="#">
                Lost your password?
              </Link>
            </div>

            <Button className="w-full rounded-full h-11" onClick={handleSignin}>
              Login
            </Button>

            <p className="mx-auto">
              You don&#39;t an account?
              <Link className="ml-1 hover:underline" to="/auth/sign-up">
                Create one
              </Link>
            </p>
          </form>

          <p className="flex items-center gap-1">
            <Link className="hover:underline" to="#">
              Terms of Service
            </Link>
            |
            <Link className="hover:underline" to="#">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      <div className="relative flex-1 w-1/2 h-full hidden md:flex">
        <img
          className="absolute w-full h-full object-cover -z-10"
          src={image}
          alt="image"
        />

        <div className="w-full h-full p-8 pl-12 flex flex-col gap-6 text-white justify-center">
          <img
            className="h-12 object-contain mr-auto"
            src={onlyLogo}
            alt="logo"
          />
          <h3 className="text-4xl font-bold">Make an awesome experience</h3>
          <p>
            Discover yourself in a fleet of awesome designers, to make more
            awesome creations
          </p>
          <div className="w-full flex items-center">
            <div className="flex items-center">
              <img className="w-9 h-9 rounded-full" src={image} alt="image" />
              <img
                className="w-9 h-9 rounded-full -translate-x-2"
                src={image}
                alt="image"
              />
              <img
                className="w-9 h-9 rounded-full -translate-x-4"
                src={image}
                alt="image"
              />
              <img
                className="w-9 h-9 rounded-full -translate-x-6"
                src={image}
                alt="image"
              />
              <img
                className="w-9 h-9 rounded-full -translate-x-8"
                src={image}
                alt="image"
              />
            </div>

            <p className="">Join 14+ users</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
