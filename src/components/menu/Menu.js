import React from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FilterLink from './MenuContainer'

const Menu = () => (
  <div>
    <Drawer >
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </Drawer>
  </div>
);

export default Menu