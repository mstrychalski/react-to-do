import React, { PropTypes } from 'react'
import Todo from './Todo'
import {List} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import AddTodo from './AddTodo'
import './TodoList.css';

const TodoList = ({ todos, onTodoClick }) => (
  <div className="TodoList">
    <Card>
      <AddTodo />
      <List>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        )}
      </List>
    </Card>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList