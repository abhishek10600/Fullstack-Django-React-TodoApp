import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoaderComponent from "../components/LoaderComponent";

const EditTodo = () => {
  let { id } = useParams();
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [isLoding, setIsLoading] = useState(false);
  const token = localStorage.getItem("Token");
  const getTodoDetail = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8000/todos/${id}/`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      setTodoTitle(res.data.title);
      setTodoDescription(res.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodoDetail(id);
  }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.put(
        `http://localhost:8000/todos/${id}/`,
        {
          title: todoTitle,
          description: todoDescription,
        },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      setIsLoading(false);
      toast.success("Todo updated successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setIsLoading(false);
  };

  return (
    <div className="text-white max-w-[1240px] mx-auto">
      <div className="text-white flex flex-col md:gap-10 md:my-4 gap-8 my-4 md:justify-stretch md:items-stretch justify-center items-center">
        <h1 className="text-center md:text-3xl text-2xl my-4">
          Edit Your Todo
        </h1>
        <form
          className="md:flex md:flex-col md:gap-4 flex flex-col gap-4 mx-4"
          onSubmit={handleSubmit}
        >
          <input
            className="focus:outline-none md:py-4 md:px-4 bg-black md:border-b border-gray-500 md:rounded-lg py-2 border-b rounded-lg px-2"
            type="text"
            required
            value={todoTitle}
            onChange={(ev) => setTodoTitle(ev.target.value)}
            placeholder="Enter the title"
          />
          <textarea
            rows="6"
            className="focus:outline-none md:py-4 md:px-4 bg-black border-gray-500 md:border-b md:rounded-lg py-2 border-b rounded-lg px-2"
            placeholder="Enter the description"
            onChange={(ev) => setTodoDescription(ev.target.value)}
            value={todoDescription}
          />
          <button
            className="bg-blue-500 md:py-4 md:rounded-lg hover:scale-95 ease-in-out duration-200 py-2 rounded-lg flex justify-center items-center"
            type="submit"
          >
            {isLoding ? <LoaderComponent /> : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
