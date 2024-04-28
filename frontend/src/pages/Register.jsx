import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div className="text-white max-w-[1240px] mx-auto">
      <h1 className="text-center my-10 text-2xl md:my-12 md:text-3xl md:font-bold">Create Your Account</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;
