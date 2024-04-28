import TodoComponent from "./TodoComponent";

const TodoListComponent = () => {
  const data = [
    {
      id: "1",
      title: "Learn Django",
      description: "I need to learn Django",
    },
    {
      id: "2",
      title: "Learn Python",
      description: "I must master Python programming language.",
    },
    {
      id: "3",
      title: "Go to gym",
      description: "Go to gym and workout.",
    },
    {
      id: "4",
      title: "Buy a new monitor.",
      description: "I need to buy a new monitor for my work from home setup.",
    },
    {
      id: "5",
      title: "Master Deep Learning",
      description: "I need to be good at deep learning",
    },
    {
      id: "6",
      title: "Practice DSA",
      description: "Practice DSA questions and improve logic building.",
    },
  ];
  return (
    <div className="text-white md:grid md:grid-cols-3 md:gap-6 md:my-4 flex flex-col gap-4 mx-6">
      {data.map((item) => (
        <TodoComponent
          key={item.id}
          todoId={item.id}
          todoTitle={item.title}
          todoDescription={item.description}
        />
      ))}
    </div>
  );
};

export default TodoListComponent;
