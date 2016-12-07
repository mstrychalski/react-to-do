import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './TodoActions'
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField'

const addButtonStyle = {
  position: 'absolute',
  right: 10,
  top: 5
};

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="AddTodo">
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.getValue().trim()) {
          return
        }
        dispatch(addTodo(input.getValue()));
        input.getInputNode().value = ''
      }}>
        <TextField
          hintText="Enter task name"
          fullWidth={true}
          ref={node => {
            input = node
          }}
        />
        <IconButton type="submit"
          style={addButtonStyle}
        >
          <ContentAdd />
        </IconButton>
      </form>
    </div>
  )
};

AddTodo = connect()(AddTodo);

export default AddTodo