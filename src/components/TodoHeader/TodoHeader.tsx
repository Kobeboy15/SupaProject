import { NavLink } from "react-router-dom";
import './TodoHeader.css';

function TodoHeader() {
  return (
    <div className="nav-header flex justify-around py-8">
      <NavLink to="/" exact activeClassName="selected">Tasks</NavLink>
      <NavLink to="/trash" activeClassName="selected">Trash</NavLink>
    </div>
  );
}

export default TodoHeader;
