import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="text-white max-w-[1240px] mx-auto">
      <h1 className="text-center my-10 text-2xl md:my-12 md:text-3xl md:font-bold">
        Login To Your Account
      </h1>
      <LoginForm />
    </div>
  );
};

export default Login;
