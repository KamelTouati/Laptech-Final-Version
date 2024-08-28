import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsersCount } from "../../../redux/apiCalls/profileApiCall";
import { getProductsCount } from "../../../redux/apiCalls/productApiCall";
import { fetchAllComments } from "../../../redux/apiCalls/commentApiCall";

const AdminMain = () => {
  const dispatch = useDispatch();
  const { usersCount } = useSelector((state) => state.profile);
  const { productsCount } = useSelector((state) => state.product);
  const { comments } = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(getUsersCount());
    dispatch(getProductsCount());
    dispatch(fetchAllComments());
  }, []);

  return (
    <div className="amdin-main">
      <div className="admin-main-header">
        <div className="admin-main-card">
          <h5 className="admin-card-title">Users</h5>
          <div className="admin-card-count">{usersCount}</div>
          <div className="admin-card-link-wrapper">
            <Link to="/admin-dashboard/users-table" className="admin-card-link">
              See all users
            </Link>
            <div className="admin-card-icon">
              <i className="bi bi-person"></i>
            </div>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-card-title">Products</h5>
          <div className="admin-card-count">{productsCount}</div>
          <div className="admin-card-link-wrapper">
            <Link to="/admin-dashboard/products-table" className="admin-card-link">
              See all products
            </Link>
            <div className="admin-card-icon">
              <i className="bi bi-file-product"></i>
            </div>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-card-title">Comments</h5>
          <div className="admin-card-count">{comments.length}</div>
          <div className="admin-card-link-wrapper">
            <Link
              to="/admin-dashboard/comments-table"
              className="admin-card-link"
            >
              See all comments
            </Link>
            <div className="admin-card-icon">
              <i className="bi bi-chat-left-text"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
