import TodoListInput from '../components/TodoListInput/TodoListInput';
import TodoDeleteList from '../components/TodoDeleteList/TodoDeleteList'

function TodoTrashPage() {
  return (
    <div className="px-4 max-w-xl m-auto relative">
      <div className="relative w-full -top-40">
        <h2 className="font-bold text-white text-3xl">RECENTLY DELETED</h2>
        <TodoListInput />
        <TodoDeleteList />
    </div>
  </div>
  );
}

export default TodoTrashPage;