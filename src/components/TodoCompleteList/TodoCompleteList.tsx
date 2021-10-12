import { useMutation, useQuery } from '@apollo/client';
import TodoListItem from './TodoCompleteListItem';
import { COMPLETED_LIST, DELETE_ITEM } from '../../repositories/TodoListData';
import Loading from '../LoadingSpinner/Loading';
import TodoListFooter from '../TodoListFooter/TodoListFooter';
import { useState, useEffect } from 'react';

export type Todo = {
  id: number;
  title: string;
  dueDate: string;
  completedDate: string;
}

type TodoData = {
  todos: Todo[]
}

function TodoCompleteList() {
  const [todoItems, setTodoItem] = useState<Todo[]>([]);
  const { loading, error, data, refetch } = useQuery<TodoData, Todo>(COMPLETED_LIST);

  const [deleteItem, { loading: deleteLoading }] = useMutation(DELETE_ITEM, {
    update(_, result){
      if(!deleteLoading) console.log(result);
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
            />
            ) 
          }
        </div>
      ) : 
        <div className="empty-container p-7 text-center">
          <small className="opacity-50">No Completed tasks!</small>
        </div> 
      }
      
    </div> 
  );
}

export default TodoCompleteList;
