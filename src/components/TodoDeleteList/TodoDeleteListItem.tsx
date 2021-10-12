import { Todo } from "./TodoDeleteList";
import './TodoDeleteListItem.css';

type TodoListItemProps = { 
  todo: Todo 
  handleDelete: (id: number) => void;
  handleRestore: (id: number) => void;
}

function TodoDeleteListItem({todo, handleDelete, handleRestore} :  TodoListItemProps) {

  return (
    <div className="listitem-container flex items-center px-5 py-4">
      <div className="container-info flex-1 ml-5">
        <p>{ todo.title }</p>
        { todo.dueDate!= null && <small className="italic">Due on: { todo.dueDate }</small>}
      </div>
      <span className="material-icons item-actions cursor-pointer" onClick={() => handleRestore(todo.id)}>undo</span>
      <span className="material-icons item-actions cursor-pointer ml-6" onClick={() => handleDelete(todo.id)}>delete</span>
    </div>
  );
}

export default TodoDeleteListItem;
