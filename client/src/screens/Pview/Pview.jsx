import { useState, useEffect } from 'react'
import { getProduct } from '../../services/products'
import { useParams } from 'react-router-dom'
import './Pview.css'



const Pview = () => {

  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const productOne = await getProduct(id);
      setProduct(productOne)
    }
    fetchProduct()
  }, [])

  if (!product) return <h1>loading...</h1>

  return (
    <>
      <div className="container-view">
        <div className='product-view'>
          <img src={product.image} alt={product.name} />
          <div className="product-stuff">
            <p id="pname">{product.name}</p>
            <p id="psize">{product.size}</p>
            <p id="pprice">${product.price}</p>
            <p id="pdes">{product.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pview
