import TodoListInput from '../components/TodoListInput/TodoListInput';
import TodoList from '../components/TodoList/TodoList';
import TodoCompleteList from '../components/TodoCompleteList/TodoCompleteList';
import TodoDeleteList from '../components/TodoDeleteList/TodoDeleteList';
import { Switch, Route } from "react-router-dom";

function TodoListPage() {
  return (
    <div className="px-4 max-w-xl m-auto relative">
      <div className="relative w-full -top-40">
        <h2 className="font-bold text-white text-3xl">TO DO</h2>
        <TodoListInput />
        <Switch>
          <Route exact path="/">
            <TodoList />
          </Route>
          <Route exact path="/complete">
            <TodoCompleteList />
          </Route>
          <Route exact path="/trash">
            <TodoDeleteList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default TodoListPage;