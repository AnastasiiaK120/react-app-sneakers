
function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Cart</h2>
            <div className="items">
              <div className="cartItem d-flex align-center mb-20">
                
                <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg">

                </div>
                <div className="mb-20 mr-30 flex">
                  <p className="mb-5">Men shoe</p>
                  <b>$100</b>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
              </div>

              <div className="cartItem d-flex align-center mb-20">
                
                <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg">

                </div>
                <div className="mb-20 mr-30 flex">
                  <p className="mb-5">Men shoe</p>
                  <b>$100</b>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
              </div>

              <ul className="cartTotalBlock">
                <li className="d-flex">
                  <span>Sum:</span>
                  <div></div>
                  <b>$200</b>
                </li>
                <li className="d-flex">
                  <span>Tax 0%:</span>
                  <div>0</div>
                  <b></b>
                </li>
              </ul>
            </div>
        </div>
      </div>

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
        <div className="d-flex align-center justify-between mb-40">
        <h1 className="mb-40">All sneakers</h1>
        <div className="search-block d-flex">
          <img style={{width: 22, height: 25}} src="/img/search.svg" alt="Search" />
          <input placeholder="Search..." />

        </div>
        </div>
      <div className="d-flex">
        <div className="card">
          <div className="favorite">
            <img src="/img/heart.svg" alt="Unliked" />
          </div>
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
