import TodoListInput from '../components/TodoListInput/TodoListInput';
import TodoList from '../components/TodoList/TodoList';

function TodoCompletePage() {
  return (
    <div className="px-4 max-w-xl m-auto relative">
      <div className="relative w-full -top-40">
        <h2 className="font-bold text-white text-3xl">COMPLETED</h2>
        <TodoListInput />
        <TodoList />
      </div>
    </div>
  );
}

export default TodoCompletePage;