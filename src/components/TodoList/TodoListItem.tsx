import { Todo } from "./TodoList";
import { useMutation } from '@apollo/client'
import { SOFT_DELETE_ITEM } from '../../repositories/TodoListData';
import './TodoListItem.css';

type TodoListItemProps = { 
  todo: Todo 
}

function TodoListItem({todo} :  TodoListItemProps) {

  const [deleteItem, { loading }] = useMutation(SOFT_DELETE_ITEM, {
    update(_, result){
      if(!loading) console.log(result);
      window.location.reload();
    },
    onError(err){
      console.log(err);
    }
  });

  function handleDelete() {
    deleteItem({variables: { id: todo.id }});
  }

  return (
    <div className="listitem-container flex items-center px-7 py-4">
      <div className="container-info flex flex-1 items-center">
        <input type="radio" className="checkbox-round" />
        <div className="info-wrapper ml-6">
          <p>{ todo.title }</p>
          { todo.dueDate!= null && <small className="italic">Due on: { todo.dueDate }</small>}
        </div>
      </div>
      <span className="material-icons cursor-pointer">edit</span>
      <span className="material-icons cursor-pointer ml-6" onClick={handleDelete}>delete</span>
    </div>
  );
}

export default TodoListItem;
