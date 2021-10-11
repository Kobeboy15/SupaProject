import './App.css';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoListPage from './pages/TodoListPage';

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <TodoHeader />
      <TodoListPage />
    </Router>
  );
}

export default App;
