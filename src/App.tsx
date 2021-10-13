import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoListPage from './pages/TodoListPage';

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <TodoHeader />
      <TodoListPage />
      <div className="text-center opacity-20 fixed w-full bottom-0 p-3 z-0">
        <small>Made by Kobe Michael ©2021</small>
      </div>
    </Router>
  );
}

export default App;
