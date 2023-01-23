function Card() {
    return (
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
    );
}

export default Card;