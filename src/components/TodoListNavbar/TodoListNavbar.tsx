import { NavLink } from "react-router-dom";
import './TodoListNavbar.css';

function TodoListFooter() {
  return (
    <div className="list-footer flex justify-between items-center px-7 py-4">
      <div>
        <NavLink to="/" exact activeClassName="selected" className="pr-5">All</NavLink>
        <NavLink to="/complete" exact activeClassName="selected" className="pr-5">Completed</NavLink>
        <NavLink to="/trash" activeClassName="selected" className="pr-5">Deleted</NavLink>
      </div>
    </div>
  );
}

export default TodoListFooter;