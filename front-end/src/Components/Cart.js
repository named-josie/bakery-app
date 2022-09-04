

export default function Cart({setItem}) {

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cake.setItem.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {setItem.map((cake) => (
                <div className="cart-item" key={cake.id}>
                  <div className="cart-product">
                    <img src={cake.image} alt={cake.name} />
                    <div>
                      <h3>{cake.name}</h3>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">{cake.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleClick(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleClick(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    {cake.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


