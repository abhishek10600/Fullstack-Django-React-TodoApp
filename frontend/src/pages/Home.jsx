import CreateTodoComponent from "../components/CreateTodoComponent";
import TodoListComponent from "../components/TodoListComponent";

const Home = () => {
  return (
    <div className="md:max-w-[1240px] md:mx-auto">
      <CreateTodoComponent />
      <h1 className="text-white md:text-3xl md:font-semibold md:py-2 text-3xl font-medium mx-4 py-4">
        Your Todos
      </h1>
      <TodoListComponent />
    </div>
  );
};

export default Home;
