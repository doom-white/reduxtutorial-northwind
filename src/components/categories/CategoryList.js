import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  changeCategory,
  getCategories,
} from "../../redux/actions/categoryActions";
import { getProducts } from "../../redux/actions/productAction";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectedCategory = (cat) => {
    this.props.actions.changeCategory(cat);
    this.props.actions.getProducts(cat.id);
  };

  render() {
    return (
      <div>
        <h3>
          <span className="badge bg-primary">
            Categories ({this.props.categories.length})
          </span>
        </h3>
        <ul className="list-group">
          {this.props.categories.map((cat) => (
            <li
              className={`list-group-item ${
                cat.id === this.props.currentCategory.id ? "active" : null
              }`}
              key={cat.id}
              onClick={() => this.selectedCategory(cat)}
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
      getProducts: bindActionCreators(getProducts, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
