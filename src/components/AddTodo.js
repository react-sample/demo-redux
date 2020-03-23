import React, { useState } from "react";
import { useDispatch } from "react-redux";  
import { addTodo } from "../redux/actions";


const AddTodo = () => {

  const dispatch = useDispatch();
  const [input, setInput] = useState(''); 

  const handleAddTodo = () => {
    if (!input.trim()) {
      return;
    }
    
    dispatch(addTodo(input));
    setInput('');
  };
  
  return (
    <div>
      <input
        onChange={e => setInput(e.target.value)}
        value={input}
      />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;

// class AddTodo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { input: "" };
//   }

//   updateInput = input => {
//     this.setState({ input });
//   };

//   handleAddTodo = () => {
//     if (!this.state.input.trim()) {
//       return;
//     }
    
//     this.props.addTodo(this.state.input);
//     this.setState({ input: "" });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           onChange={e => this.updateInput(e.target.value)}
//           value={this.state.input}
//         />
//         <button className="add-todo" onClick={this.handleAddTodo}>
//           Add Todo
//         </button>
//       </div>
//     );
//   }
// }

// export default connect(
//   null,
//   { addTodo }
// )(AddTodo);

