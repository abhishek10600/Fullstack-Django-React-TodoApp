const TodoComponent = ({ todoId, todoTitle, todoDescription }) => {
  return (
    <div className="border-b border-r border-gray-500 md:rounded-lg px-4 py-4 flex flex-col justify-center gap-4 hover:scale-110 duration-300">
      <h1 className="md:text-xl md:font-bold font-bold text-lg">{todoTitle}</h1>
      <p className="">{todoDescription}</p>
      <div className="flex gap-4 my-2">
        <button className="bg-blue-500 px-8 py-2 rounded-md md:px-8 md:py-2 hover:scale-105 ease-in-out duration-200">
          Edit
        </button>
        <button className="bg-red-500 px-8 py-2 rounded-md md:px-8 md:py-2 hover:scale-105 ease-in-out duration-200">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoComponent;
