import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="md:flex md:flex-col md:gap-4 flex flex-col gap-4 mx-4">
      <input
        className="focus:outline-none md:py-4 md:px-4 bg-black md:border-b border-gray-500 md:rounded-lg py-2 border-b rounded-lg px-2"
        type="text"
        placeholder="Enter your username"
      />
      <input
        className="focus:outline-none md:py-4 md:px-4 bg-black border-gray-500 md:border-b md:rounded-lg py-2 border-b rounded-lg px-2"
        type="password"
        placeholder="Enter your password"
      />
      <Link to="/register" className="md:px-4 px-2">
        Don't have an account?
      </Link>
      <button className="bg-blue-500 md:py-4 md:rounded-lg hover:scale-95 ease-in-out duration-200 py-2 rounded-lg">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
