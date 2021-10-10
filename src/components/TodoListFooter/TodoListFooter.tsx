import { NavLink } from "react-router-dom";
import './TodoListFooter.css';

function TodoListFooter() {
  return (
    <div className="list-footer flex justify-between items-center px-7 py-4">
      <div>
        <NavLink to="/" exact activeClassName="selected" className="pr-5">All</NavLink>
        <NavLink to="/complete" exact activeClassName="selected" className="pr-5">Completed</NavLink>
        <NavLink to="/trash" activeClassName="selected" className="pr-5">Deleted</NavLink>
      </div>
      {/* <div className="list-counter">
        <small>4 items left</small>
      </div> */}
    </div>
  );
}

export default TodoListFooter;