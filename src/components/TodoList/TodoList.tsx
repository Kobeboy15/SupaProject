import { useQuery } from '@apollo/client';
import TodoListItem from './TodoListItem';
import { TODO_LIST } from '../../repositories/TodoListData';
import Loading from '../LoadingSpinner/Loading';

export type Todo = {
  id: number;
  title: string;
  dueDate: string;
}

type TodoData = {
  todos: Todo[]
}

function TodoList() {
  const { loading, error, data } = useQuery<TodoData, Todo>(TODO_LIST);
  if(loading) return <Loading />;
  if(error) return <p>Error</p>;
  return (
    <>
      { data?.todos.map((item) => <TodoListItem todo={item} key={item.id}/>) }
    </> 
  );
}

export default TodoList;
