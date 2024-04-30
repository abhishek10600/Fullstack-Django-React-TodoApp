import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import LoaderComponent from "./LoaderComponent";

const CreateTodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("Token");
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:8000/todos/list/",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      setIsLoading(false);
      toast.success("Todo created successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setIsLoading(false);
  };
  return (
    <div className="text-white flex flex-col md:gap-10 md:my-4 gap-8 my-4 md:justify-stretch md:items-stretch justify-center items-center">
      <h1 className="text-center md:text-3xl text-2xl my-4">Create New Todo</h1>
      <form
        className="md:flex md:flex-col md:gap-4 flex flex-col gap-4 mx-4"
        onSubmit={handleSubmit}
      >
        <input
          className="focus:outline-none md:py-4 md:px-4 bg-black md:border-b border-gray-500 md:rounded-lg py-2 border-b rounded-lg px-2"
          type="text"
          required
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          placeholder="Enter the title"
        />
        <textarea
          rows="6"
          className="focus:outline-none md:py-4 md:px-4 bg-black border-gray-500 md:border-b md:rounded-lg py-2 border-b rounded-lg px-2"
          placeholder="Enter the description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <button
          className="bg-blue-500 md:py-4 md:rounded-lg hover:scale-95 ease-in-out duration-200 py-2 rounded-lg flex justify-center items-center"
          type="submit"
        >
          {isLoading ? <LoaderComponent /> : "Post"}
        </button>
      </form>
    </div>
  );
};

export default CreateTodoForm;
