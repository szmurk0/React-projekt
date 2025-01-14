import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  console.log("Produkt", product);
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Cena: {product.price} zł</p>
      </div>
    </div>
  );
};


ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
