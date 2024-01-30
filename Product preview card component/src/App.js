import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="grid">
        <div className="img">
          <img src="image-product-desktop.jpg" alt="Product" />
        </div>
        <div className="card-content">
          <h6 className="pro-cat">Perfume</h6>
          <h2 className="pro-name">Gabrielle Essence Eau De Parfum</h2>
          <p className="pro-des">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="price">
            <p className="current-price"> $149.99</p>
            <p className="old-price">$169.99</p>
          </div>
          <button className="cta">
            <img src="icon-cart.svg" alt="Cart" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
