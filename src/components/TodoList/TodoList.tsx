import { useMutation, useQuery } from '@apollo/client';
import TodoListItem from './TodoListItem';
import { SET_COMPLETE, SOFT_DELETE_ITEM, TODO_LIST, UPDATE_ITEM } from '../../repositories/TodoListData';
import Loading from '../LoadingSpinner/Loading';
import TodoListFooter from '../TodoListFooter/TodoListFooter';

import './TodoList.css';
import { useEffect, useState } from 'react';

export type Todo = {
  id: number;
  title: string;
  dueDate: string;
}

type TodoData = {
  todos: Todo[]
}

function TodoList() {
  const [todoItems, setTodoItem] = useState<Todo[]>([]);
  const { loading, error, data, refetch } = useQuery<TodoData, Todo>(TODO_LIST);

  const [updateItem, { loading: updateLoading }] = useMutation(UPDATE_ITEM, {
    update(_, result){
      if(!updateLoading) console.log(result);
    },
    onError(err){
      console.log(err);
    }
  });
  
  const [deleteItem, { loading: deleteLoading }] = useMutation(SOFT_DELETE_ITEM, {
    update(_, result){
      if(!deleteLoading) console.log(result);
    },
    onError(err){
      console.log(err);
    }
  });
  
  const [completeItem, { loading: completeLoading }] = useMutation(SET_COMPLETE, {
    update(_, result){
      if(!completeLoading) console.log("COMPLETE",result);
    },
    onError(err){
      console.log(err);
    }
  });

  function handleUpdate(id: number, title: string, dueDate: string) {
    updateItem({variables: { id: id, title: title, dueDate: dueDate }});
    let newArr = [...todoItems];
    let temp = newArr.map(item => {
      if(item.id === id){
        return {...item, id: id, title: title, dueDate: dueDate};
      }
      return item;
    })
    setTodoItem(temp);
  }

  function handleComplete(id: number) {
    const formattedDate = new Date()
    completeItem({variables: { id: id, completedDate: formattedDate.toISOString().split('T')[0] }})
    setTodoItem(todoItems.filter(item => item.id !== id));
    refetch();
  }

  function handleDelete(id: number) {
    deleteItem({variables: { id:id }});
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
              handleComplete={handleComplete} 
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          ) }
        </div>
      ) : 
        <div className="empty-container p-7 text-center">
          <small className="opacity-50">No tasks!</small>
        </div> 
      }
      
    </div> 
  );
}

export default TodoList;
