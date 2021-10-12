import { useMutation, useQuery } from '@apollo/client';
import TodoListItem from './TodoDeleteListItem';
import { DELETE_ITEM, SOFT_DELETED_LIST, RESTORE_ITEM } from '../../repositories/TodoListData';
import Loading from '../LoadingSpinner/Loading';
import TodoListFooter from '../TodoListFooter/TodoListFooter';
import { useEffect, useState } from 'react';

export type Todo = {
  id: number;
  title: string;
  dueDate: string;
}

type TodoData = {
  todos: Todo[]
}

function TodoDeleteList() {
  const [todoItems, setTodoItem] = useState<Todo[]>([]);
  const { loading, error, data, refetch } = useQuery<TodoData, Todo>(SOFT_DELETED_LIST);

  const [deleteItem, { loading: deleteLoading }] = useMutation(DELETE_ITEM, {
    update(_, result){
      if(!deleteLoading) console.log(result);
    },
    onError(err){
      console.log(err);
    }
  });

  const [restoreItem, { loading: restoreLoading }] = useMutation(RESTORE_ITEM, {
    update(_, result){
      if(!restoreLoading) console.log(result);
    },
    onError(err){
      console.log(err);
    }
  });

  function handleDelete(id: number) {
    deleteItem({variables: { id: id }});
    setTodoItem(todoItems.filter(item => item.id !== id));
    refetch();
  }

  function handleRestore(id: number) {
    restoreItem({variables: { id: id }});
    setTodoItem(todoItems.filter(item => item.id !== id));
    refetch();
  }

  useEffect(() => {
    if(data){
      refetch();
      setTodoItem(data.todos);
    }
  },[data, refetch])
  
  if(error) return <p>Error</p>;
  return (
    <div className="list-container">
      <TodoListFooter />
      { loading ? <Loading /> : todoItems.length > 0 ? 
      (
        <div className="scroll-container">
          { todoItems.map((item) => 
              <TodoListItem 
                todo={item} 
                key={item.id}
                handleDelete={handleDelete}
                handleRestore={handleRestore}
              />
            ) 
          }
        </div>
      ) : 
        <div className="empty-container p-7 text-center">
          <small className="opacity-50">Trash is Empty.</small>
        </div> 
      }
      
    </div> 
  );
}

export default TodoDeleteList;
