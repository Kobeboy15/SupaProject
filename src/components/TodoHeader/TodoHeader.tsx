import background from "../../assets/images/banner.jpg";
import './TodoHeader.css';

function TodoHeader() {
  return (
    <div className="header-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="max-w-xl m-auto"></div>
    </div>
  );
}

export default TodoHeader;
