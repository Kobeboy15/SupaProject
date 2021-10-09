import { Link } from "react-router-dom";

function TodoHeader() {
  return (
    <div className="flex justify-around">
      <Link to="/new">New</Link>
      <Link to="/">To Do</Link>
      <Link to="/trash">Trash</Link>
    </div>
  );
}

export default TodoHeader;
