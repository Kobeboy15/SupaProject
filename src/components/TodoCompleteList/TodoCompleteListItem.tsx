import { Todo } from "./TodoCompleteList";

type TodoListItemProps = { 
  todo: Todo 
  handleDelete: (id: number) => void;
}

function TodoDeleteListItem({todo, handleDelete} :  TodoListItemProps) {

  return (
    <div className="listitem-container flex items-center px-5 py-4">
      <div className="container-info flex-1 ml-5">
        <p>{ todo.title }</p>
        <small className="italic">Completed on: { todo.completedDate }</small>
      </div>
      <span className="material-icons item-actions cursor-pointer" onClick={() => handleDelete(todo.id)}>delete</span>
    </div>
  );
}

export default TodoDeleteListItem;
