import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import SignInForm from "./SignInForm";
import { useLocation, useNavigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const LoginPage = () => {
  const location = useLocation();
  const [isLoginScreen, setIsloginScreen] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/auth/login") {
      setIsloginScreen(true);
      return;
    }
    setIsloginScreen(false);
    return () => {};
  }, [location]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add authentication logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Pattern"
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>
          {isLoginScreen ? <SignInForm /> : <SignUpForm></SignUpForm>}
        </div>
      </section>
    </>
  );
};

export default LoginPage;
