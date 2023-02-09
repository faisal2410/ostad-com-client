import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import Jumbotron from "../components/cards/Jumbotron";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Cart=()=> {
  // context
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  // hooks
  const navigate = useNavigate();

  const removeFromCart = (productId) => {
    let myCart = [...cart];
    let index = myCart.findIndex((item) => item._id === productId);
    myCart.splice(index, 1);
    setCart(myCart);
    localStorage.setItem("cart", JSON.stringify(myCart));
  };

  const cartTotal = () => {
    let total = 0;
    cart.map((item) => {
      total += item.price;
    });
    return total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <>
      <Jumbotron
        title={`Hello ${auth?.token && auth?.user?.name}`}
        subTitle={
          cart?.length
            ? `You have ${cart.length} items in the cart. ${auth?.token ? "" : "Please login to checkout"
            }`
            : "Your cart is empty"
        }
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="p-3 mt-2 mb-2 h4 bg-light text-center">
              {cart?.length ? (
                "My Cart"
              ) : (
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/")}
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {cart?.length && (
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {cart?.map((p) => (
                  <div
                    key={p._id}
                    className="card mb-3"
                  // style={{ maxWidth: 540 }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={`${process.env.REACT_APP_API}/product/photo/${p._id}`}
                          alt={p.name}
                          style={{
                            height: "150px",
                            width: "150px",
                            objectFit: "cover",
                            marginLeft: "-12px",
                            borderRopRightRadius: "0px",
                          }}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            {p.name}{" "}
                            {p?.price?.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </h5>
                          <p className="card-text">{`${p?.description?.substring(
                            0,
                            50
                          )}..`}</p>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="card-text">
                          <small className="text-muted">
                            Listed {moment(p.createdAt).fromNow()}
                          </small>
                        </p>
                        <p
                          className="text-danger mb-2 pointer"
                          onClick={() => removeFromCart(p._id)}
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-4">
              <h4>Your cart summary</h4>
              Total / Address / Payments
              <hr />
              <h6>Total: {cartTotal()}</h6>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
