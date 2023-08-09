import PropTypes from 'prop-types';
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container d-flex justify-content-center align-items-center">
      <h2>{greeting}</h2>
    </div>
  );
};
ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
  };
export default ItemListContainer;
