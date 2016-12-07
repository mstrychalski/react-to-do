import React, { PropTypes } from 'react'
import {ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Checkbox from 'material-ui/Checkbox';

const Todo = ({ onClick, completed, text }) => (
  <ListItem primaryText={text}
            onClick={onClick}
            style={{
              textDecoration: completed ? 'line-through' : 'none'
            }}
  />
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo