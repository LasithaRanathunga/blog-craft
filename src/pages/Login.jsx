import { useState } from "react";
import { login } from "@/services/firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  function goToAdmin() {
    navigate("/admin");
  }

  function submitLogin(e) {
    e.preventDefault();
    login(email, pass, goToAdmin);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-4xl font-bold text-green-500 mb-10">Login</p>
      <form className="flex flex-col" onSubmit={submitLogin}>
        <input
          className=" w-80 text-xl border-2 border-green-500 p-2 rounded-md"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-xl border-2 border-green-500 p-2 rounded-md mt-4"
          type="password"
          placeholder="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          className="text-xl border-2 bg-green-500 text-white hover:cursor-pointer border-green-500 p-2 rounded-md mt-4"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
}
