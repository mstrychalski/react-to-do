import React, { PropTypes } from 'react'
import MenuItem from 'material-ui/MenuItem';
import './MenuLink.css';

const MenuLink = ({ active, children, onClick }) => {

  if (active) {
    return <MenuItem className="MenuLink active" primaryText={children} />
  }

  return (
    <MenuItem className="MenuLink" primaryText={children} onClick={e => {
      e.preventDefault();
      onClick()
    }}>

    </MenuItem>
  )
};

MenuLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MenuLink