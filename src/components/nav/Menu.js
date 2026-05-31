import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import Search from "../forms/Search";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

export default function Menu() {
  // context
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  // hooks
  const categories = useCategory();
  const navigate = useNavigate();

  // console.log("categories in menu => ", categories);

  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <nav className="shop-navbar sticky-top">
        <NavLink className="brand-link" aria-current="page" to="/">
          ShopEase
        </NavLink>

        <div className="nav-links">
          <NavLink className="nav-link" aria-current="page" to="/">
            Home
          </NavLink>

          <NavLink className="nav-link" aria-current="page" to="/shop">
            Shop
          </NavLink>

          <div className="dropdown">
            <button
              type="button"
              className="nav-link pointer dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Categories
            </button>

            <ul
              className="dropdown-menu"
              style={{ height: "300px", overflow: "scroll" }}
            >
              <li>
                <NavLink className="nav-link" to="/categories">
                  All Categories
                </NavLink>
              </li>

              {categories?.map((c) => (
                <li key={c._id}>
                  <NavLink className="nav-link" to={`/category/${c.slug}`}>
                    {c.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="nav-actions">
          <Search />

          <Badge
            count={cart?.length >= 1 ? cart.length : 0}
            offset={[-5, 11]}
            showZero={true}
          >
            <NavLink className="nav-link" aria-current="page" to="/cart">
              Cart
            </NavLink>
          </Badge>

          {!auth?.user ? (
            <>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </>
          ) : (
            <div className="dropdown">
              <button
                type="button"
                className="nav-link pointer dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                {auth?.user?.name?.toUpperCase()}
              </button>

              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="nav-link"
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item pointer">
                  <button type="button" onClick={logout} className="nav-link logout-button">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
