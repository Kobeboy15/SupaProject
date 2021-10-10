import { useMutation } from '@apollo/client';
import { ChangeEventHandler, useState } from 'react';
import { ADD_ITEM } from '../../repositories/TodoListData';
import './TodoListInput.css';

function TodoListInput(props: any) {

  const [values, setValues] = useState({
    title: '',
    dueDate: ''
  })

  const [addItem, { loading }] = useMutation(ADD_ITEM, {
    update(_, result){
      if(!loading) console.log(result);
      window.location.reload();
    },
    onError(err){
      console.log(err);
    }
  });

  const onChange: ChangeEventHandler<HTMLInputElement> = e => setValues({...values, title: e.target.value})
  const onChangeDate: ChangeEventHandler<HTMLInputElement> = e => setValues({...values, dueDate: e.target.value})
  
  function handleSubmit() {
    if(values.dueDate) {
      addItem({variables: { title: values.title, dueDate: values.dueDate }});
    } else {
      addItem({variables: { title: values.title }});
    }
  }
  
  return (
    <div className="todo-input rounded-md p-4 mt-4 mb-8 w-full filter drop-shadow-md flex items-center">
      <input 
        type="text"
        className="flex-1 pr-2" 
        placeholder="Add new task"
        onChange={onChange}
      />
      <input 
        type="date"
        className="date-picker"
        onChange={onChangeDate}
      />
      <span 
        className="submit-button material-icons text-white cursor-pointer ml-6"
        onClick={handleSubmit}
      >send</span>
    </div>
  );
}

export default TodoListInput;