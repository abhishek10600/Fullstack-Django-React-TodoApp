import CreateTodoComponent from "../components/CreateTodoComponent";
import TodoListComponent from "../components/TodoListComponent";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("Token");
  if (token === null) {
    navigate("/login");
  }

  return (
    <div className="md:max-w-[1240px] md:mx-auto">
      {token ? (
        <div>
          <CreateTodoComponent />
          <h1 className="text-white md:text-3xl md:font-semibold md:py-2 text-3xl font-medium mx-4 py-4">
            Your Todos
          </h1>
          <TodoListComponent />
        </div>
      ) : (
        <div className="text-white md:h-[700px] h-[500px] flex flex-col justify-center items-center md:gap-10 gap-5">
          <h1 className="md:text-5xl text-xl">
            You need to login to make your todos!
          </h1>
          <Link
            to="/login"
            className="bg-blue-500 md:px-8 md:py-2 md:rounded-lg px-6 py-2 rounded-lg"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
