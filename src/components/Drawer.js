function Drawer() {
     return (
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between  mb-30 ">Cart <img className="cu-p" src="/img/btn-remove.svg" alt="" /> </h2>
          
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
              <div className="cartTotalBlock">
              <ul>
                <li className="d-flex">
                  <span>Sum:</span>
                  <div></div>
                  <b>$200</b>
                </li>
                <li className="d-flex">
                  <span>Tax 0%:</span>
                  <div></div>
                  <b>0</b>
                </li>
              </ul>
              <button className="greenButton" >Pay <img src="/img/arrow.svg" alt="arrow"></img></button>
              </div>
              
            </div>
        </div>
        </div>
       
     );
}

export default Drawer;