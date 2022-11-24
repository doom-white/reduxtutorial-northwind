import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  changeCategory,
  getCategories,
} from "../../redux/actions/categoryActions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  render() {
    return (
      <div>
        <h3>Categories</h3>
        <ul className="list-group">
          {this.props.categories.map((cat) => (
            <li
              className={`list-group-item ${
                cat.id === this.props.currentCategory.id ? "active" : null
              }`}
              key={cat.id}
              onClick={() => this.props.actions.changeCategory(cat)}
            >
              {cat.categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentCategory: state.ChangeCategoryReducer,
    categories: state.CategoryListReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getCategories: bindActionCreators(getCategories, dispatch),
      changeCategory: bindActionCreators(changeCategory, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
