import "./ItemCount.css"
const ItemCount = ({ stock, onChange, quantity }) => {
    const increment = () => {
      if (quantity < stock) {
        onChange(quantity + 1);
      }
    };
  
    const decrement = () => {
      if (quantity > 1) {
        onChange(quantity - 1);
      }
    };
  
    return (
      <div>
        <div className="btns">
          <button onClick={decrement}>
            {" "}
            -{" "}
          </button>
          <h4>{quantity}</h4>
          <button onClick={increment}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    );
  };

  export default ItemCount;