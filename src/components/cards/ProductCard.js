import { Badge } from "antd";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";
import { PRODUCT_PLACEHOLDER, productPhotoUrl } from "../../config";

export default function ProductCard({ p }) {
  // context
  const [cart, setCart] = useCart();
  // hooks
  const navigate = useNavigate();

  return (
    <div className="card product-card mb-3 hoverable">
      <Badge.Ribbon text={`${p?.sold || 0} sold`} color="red">
        <Badge.Ribbon
          text={`${
            p?.quantity >= 1
              ? `${Math.max((p?.quantity || 0) - (p?.sold || 0), 0)} in stock`
              : "Out of stock"
          }`}
          placement="start"
          color="green"
        >
          <img
            className="card-img-top"
            src={productPhotoUrl(p?._id)}
            alt={p.name}
            onError={(event) => {
              event.currentTarget.src = PRODUCT_PLACEHOLDER;
            }}
          />
        </Badge.Ribbon>
      </Badge.Ribbon>

      <div className="card-body">
        <h5>{p?.name}</h5>

        <h4 className="fw-bold">
          {p?.price?.toLocaleString("en-US", {
            style: "currency",
            currency: "INR",
          })}
        </h4>

        <p className="card-text">{p?.description?.substring(0, 60)}...</p>
      </div>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary col card-button"
          style={{ borderBottomLeftRadius: "5px" }}
          onClick={() => navigate(`/product/${p.slug}`)}
        >
          View Product
        </button>

        <button
          className="btn btn-outline-primary col card-button"
          style={{ borderBottomRightRadius: "5px" }}
          onClick={() => {
            setCart([...cart, p]);
            localStorage.setItem("cart", JSON.stringify([...cart, p]));
            toast.success("Added to cart");
          }}
        >
          Add to Cart
        </button>
      </div>

      {/* <p>{moment(p.createdAt).fromNow()}</p>
      <p>{p.sold} sold</p> */}
    </div>
  );
}
