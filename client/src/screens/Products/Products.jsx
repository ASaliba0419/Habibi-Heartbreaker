import { Link } from 'react-router-dom';
import './Products.css'

export default function Products(props) {

  return (
    <>
    <div className='product-container'>
      {props.products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img src={product.image} alt={product.name}/>
          </Link>
        </div>
      ))}
      </div>
      </>
  );
}