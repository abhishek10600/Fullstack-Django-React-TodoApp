import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoaderComponent from "./LoaderComponent";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleRegister = async (ev) => {
    ev.preventDefault();
    console.log({ username, email, password });
    if (password === confirmPassword) {
      try {
        setIsLoading(true);
        const res = await axios.post("http://localhost:8000/user/register/", {
          username,
          email,
          password,
        });
        toast.success("Your account created successfully!");
        setIsLoading(false);
        navigate("/login");
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Password and confirm password do not match.");
    }
    setIsLoading(false);
  };
  return (
    <form
      className="md:flex md:flex-col md:gap-4 flex flex-col gap-4 mx-4"
      onSubmit={handleRegister}
    >
      <input
        className="focus:outline-none md:py-4 md:px-4 bg-black md:border-b border-gray-500 md:rounded-lg py-2 border-b rounded-lg px-2"
        type="text"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
        required
        placeholder="Create a username"
      />
      <input
        className="focus:outline-none md:py-4 md:px-4 bg-black border-gray-500 md:border-b md:rounded-lg py-2 border-b rounded-lg px-2"
        type="email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
        required
        placeholder="Enter your email"
      />
      <input
        className="focus:outline-none md:py-4 md:px-4 bg-black border-gray-500 md:border-b md:rounded-lg py-2 border-b rounded-lg px-2"
        type="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        required
        placeholder="Create your password"
      />
      <input
        className="focus:outline-none md:py-4 md:px-4 bg-black border-gray-500 md:border-b md:rounded-lg py-2 border-b rounded-lg px-2"
        type="password"
        value={confirmPassword}
        onChange={(ev) => setConfirmPassword(ev.target.value)}
        required
        placeholder="Confirm your password"
      />
      <Link to="/login" className="md:px-4 px-2">
        Already have an account?
      </Link>
      <button
        className="bg-blue-500 md:py-4 md:rounded-lg hover:scale-95 ease-in-out duration-200 py-2 rounded-lg flex justify-center items-center"
        type="submit"
      >
        {isLoading ? <LoaderComponent /> : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
