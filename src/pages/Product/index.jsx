import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Button from '../../components/Button'
import { makeBadge } from '../../components/Badge'
import { formatPrice } from '../../utils/functions'
import { getProduct } from '../../utils/api'

function Product() {
  const { productId } = useParams()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', productId],
    queryFn: () => getProduct(productId),
    enabled: productId !== undefined,
  })

  useEffect(() => {
    if (!isLoading) document.title = data.title
  }, [data, isLoading])

  if (isLoading) return <p>Loader</p>
  if (isError) return <p>Something went wrong...</p>

  return (
    <div className="product">
      <h1>{data.title}</h1>

      <div className="product__layout">
        <img className="product__photo" src={data.image} />
        <div className="product__details">
          <div className="product__description">
            <h2>Description</h2>
            {data.description}
          </div>
          <div className="product__price">
            <h2>Price</h2>
            {data.price}
            <Button>Update Price</Button>
          </div>
        </div>
        <div className="product__categories">
          <h2>Catégorie</h2>
          {makeBadge(data.category)}
        </div>
      </div>
    </div>
  )
}

export default Product
