import './App.css';
import TodoHeader from './components/TodoHeader/TodoHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TodoListPage from './components/TodoListPage';
import TodoNewPage from './components/TodoNewPage';
import TodoTrashPage from './components/TodoTrashPage';

function App() {
  return (
    <Router>
      <TodoHeader />
      <Switch>
        <Route exact path="/">
          <TodoListPage />
        </Route>
        <Route exact path="/new">
          <TodoNewPage />
        </Route>
        <Route exact path="/trash">
          <TodoTrashPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
