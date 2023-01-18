
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img style={{ width: 40, height: 40 }} src="/img/shop.png"/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Shop</p>
          </div>
        </div>
        
        <ul className="d-flex">
          <li className="mr-30">
            <img style={{width: 18, height: 18}} src="/img/cart.png" />
           <span> $100 </span> 
           </li>
          <li>
          <img style={{width: 18, height: 18}} src="/img/avatar.png" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>
      <div className="d-flex">
        <div className="card">
          <img style={{width: 133, height: 112}} src="/img/sneakers/1.jpg" alt=""/>
          <h5>Men shoes</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>$159</b>
            </div>
            <button classNamed="button">
              <img style={{width: 18, height: 18}}  src="/img/plus.png" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img style={{width: 133, height: 112}} src="/img/sneakers/1.jpg" alt=""/>
          <h5>Men shoes</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>$159</b>
            </div>
            <button classNamed="button">
              <img style={{width: 18, height: 18}}  src="/img/plus.png" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img style={{width: 133, height: 112}} src="/img/sneakers/1.jpg" alt=""/>
          <h5>Men shoes</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>$159</b>
            </div>
            <button classNamed="button">
              <img style={{width: 18, height: 18}}  src="/img/plus.png" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img style={{width: 133, height: 112}} src="/img/sneakers/1.jpg" alt=""/>
          <h5>Men shoes</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>$159</b>
            </div>
            <button classNamed="button">
              <img style={{width: 18, height: 18}}  src="/img/plus.png" alt="plus" />
            </button>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default App;
