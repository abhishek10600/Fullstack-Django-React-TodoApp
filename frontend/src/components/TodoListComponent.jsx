import { useEffect, useState } from "react";
import TodoComponent from "./TodoComponent";
import axios from "axios";
import { toast } from "react-hot-toast";

const TodoListComponent = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const token = localStorage.getItem("Token");
  const getTodos = async () => {
    try {
      const res = await axios.get("https://todofy-zonu.onrender.com/todos/list/", {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      setData(res.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    getTodos();
  }, [refresh]);
  return (
    <div className="text-white md:grid md:grid-cols-3 md:gap-6 md:my-4 flex flex-col gap-4 mx-6">
      {data.map((item) => (
        <TodoComponent
          key={item.id}
          todoId={item.id}
          todoTitle={item.title}
          todoDescription={item.description}
          setRefresh={setRefresh}
        />
      ))}
    </div>
  );
};

export default TodoListComponent;
