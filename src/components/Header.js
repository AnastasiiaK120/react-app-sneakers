function Header() {
    return (
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
    );
}

export default Header;