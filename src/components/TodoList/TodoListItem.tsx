import { useRef, useState } from "react";
import { Todo } from "./TodoList";
import './TodoListItem.css';

type TodoListItemProps = { 
  todo: Todo;
  handleComplete: (id: number) => void; 
  handleDelete: (id: number) => void;
  handleUpdate: (id: number, title: string, dueDate: string) => void;
}
type EditListItemProps = {
  isEdit: boolean;
  handleUpdate: (id: number, title: string, dueDate: string) => void;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  todo: Todo;
}

type InfoListItemProps = {
  isEdit: boolean;
  todo: Todo;
  handleComplete: (id: number) => void; 
  handleDelete: (id: number) => void;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
}


function EditListItem({ isEdit, handleUpdate, setIsEdit, todo }: EditListItemProps) {
    const newText = useRef<HTMLInputElement>(null);
    const newDate = useRef<HTMLInputElement>(null);
  
  function submitUpdate(id: number) {
    handleUpdate(todo.id, newText.current?.value!, newDate.current?.value!);
    setIsEdit(!isEdit);
  }

  return (
    <div className="edit-item flex items-center ml-1 px-5 py-4">
      <div className="flex-1">
        <input 
          type="text"
          ref={newText}
          defaultValue={todo.title}
          className="edit-text block bg-transparent w-full" 
        />
        <input 
          type="date"
          ref={newDate}
          defaultValue={todo.dueDate}
          className="edit-date bg-transparent" 
        />
      </div>
      <span className="material-icons cursor-pointer" onClick={() => submitUpdate(todo.id)}>check</span>
      <span className="material-icons cursor-pointer ml-6" onClick={() => setIsEdit(!isEdit)}>close</span>
    </div>
  );
}

function InfoListItem({ isEdit, todo, handleComplete, handleDelete, setIsEdit }: InfoListItemProps) {
  return (
    <div className="info-item flex items-center px-5 py-4">
      <div className="container-info flex flex-1 items-center">
        <button className="complete-todo flex rounded-full" onClick={() => handleComplete(todo.id)}>
          <span className="material-icons">check</span>
        </button>
        <div className="info-wrapper flex-1 ml-4">
          <p>{ todo.title }</p>
          { todo.dueDate && <small className="italic">Due on: { todo.dueDate }</small>}
        </div>
      </div>
      <span className="material-icons item-actions cursor-pointer" onClick={() => setIsEdit(!isEdit)}>edit</span>
      <span className="material-icons cursor-pointer item-actions ml-6" onClick={() => handleDelete(todo.id)}>delete</span>
    </div>
  );
}

function TodoListItem({todo, handleComplete, handleDelete, handleUpdate} :  TodoListItemProps) {

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="listitem-container">
      { !isEdit ? 
          <InfoListItem isEdit={isEdit} todo={todo} handleComplete={handleComplete} handleDelete={handleDelete} setIsEdit={setIsEdit} />
        : <EditListItem isEdit={isEdit} handleUpdate={handleUpdate} setIsEdit={setIsEdit} todo={todo} />
      }
    </div>
  );
}

export default TodoListItem;
