import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async (ev) => {
    ev.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://todofy-zonu.onrender.com/user/login/",
        {
          username,
          password,
        }
      );
      setIsLoading(false);
      localStorage.setItem("Token", res.data.token);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Invalid username or password");
    }
    setIsLoading(false);
  };
  return (
    <form
      className="md:flex md:flex-col md:gap-4 flex flex-col gap-4 mx-4"
      onSubmit={handleLogin}
    >
      <input
        className="focus:outline-none md:py-4 md:px-4 bg-black md:border-b border-gray-500 md:rounded-lg py-2 border-b rounded-lg px-2"
        type="text"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
        required
        placeholder="Enter your username"
      />
      <input
        className="focus:outline-none md:py-4 md:px-4 bg-black border-gray-500 md:border-b md:rounded-lg py-2 border-b rounded-lg px-2"
        type="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        placeholder="Enter your password"
      />
      <Link to="/register" className="md:px-4 px-2">
        Don't have an account?
      </Link>
      <button
        className="bg-blue-500 md:py-4 md:rounded-lg hover:scale-95 ease-in-out duration-200 py-2 rounded-lg flex justify-center items-center"
        type="submit"
      >
        {isLoading ? <LoaderComponent /> : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
