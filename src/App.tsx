import './App.css';
import TodoHeader from './components/TodoHeader/TodoHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TodoListPage from './pages/TodoListPage';
import TodoCompletePage from './pages/TodoCompletePage';
import TodoTrashPage from './pages/TodoTrashPage';

function App() {
  return (
    <Router>
      <TodoHeader />
      <Switch>
        <Route exact path="/">
          <TodoListPage />
        </Route>
        <Route exact path="/complete">
          <TodoCompletePage />
        </Route>
        <Route exact path="/trash">
          <TodoTrashPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
