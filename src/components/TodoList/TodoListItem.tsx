import { Todo } from "./TodoList";
import './TodoListItem.css';

type TodoListItemProps = { 
  todo: Todo;
  handleComplete: (id: number) => void; 
  handleDelete: (id: number) => void;
}

function TodoListItem({todo, handleComplete, handleDelete} :  TodoListItemProps) {
  return (
    <div className="listitem-container flex items-center px-5 py-4">
      <div className="container-info flex flex-1 items-center">
        <button className="complete-todo flex rounded-full" onClick={() => handleComplete(todo.id)}>
          <span className="material-icons">check</span>
        </button>
        <div className="info-wrapper flex-1 ml-4">
          <p>{ todo.title }</p>
          { todo.dueDate!= null && <small className="italic">Due on: { todo.dueDate }</small>}
        </div>
      </div>
      <span className="material-icons item-actions cursor-pointer">edit</span>
      <span className="material-icons cursor-pointer item-actions ml-6" onClick={() => handleDelete(todo.id)}>delete</span>
    </div>
  );
}

export default TodoListItem;
