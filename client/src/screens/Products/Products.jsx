import './Products.css'
import { Link } from 'react-router-dom';



export default function Products(props) {

  return (
    <>
      <div className='product-container'>
        {props.products.map((product) => (
          <div key={product.id}>
            <p id='t-names'>{product.name}</p>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}