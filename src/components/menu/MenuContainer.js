import { connect } from 'react-redux'
import { setVisibilityFilter } from './MenuActions'
import HeaderLink from './MenuLink'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLink);

export default FilterLink