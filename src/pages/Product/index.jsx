import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Button from '../../components/Button'
import { makeBadge } from '../../components/Badge'
import { formatPrice } from '../../utils/functions'
import { getProduct } from '../../utils/api'
import InputNumber from '../../components/InputNumber'

function Product() {
  const [price, setPrice] = useState(0)
  const { productId } = useParams()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', productId],
    queryFn: () => getProduct(productId),
    enabled: productId !== undefined,
  })

  useEffect(() => {
    if (isLoading) return

    document.title = data.title
    setPrice(data.price)
  }, [isLoading])

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
            <div className="product__line">
              <InputNumber
                value={price}
                setValue={setPrice}
                min={0}
                suffix={'€'}
              />
              <p>
                <span className="bold">Price </span>(including VAT):{' '}
                {formatPrice(price * 1.2)}
              </p>
            </div>
            <div className="product__line">
              <Button disabled={true}>Update Price</Button>
            </div>
          </div>
        </div>
        <div className="product__category">
          <h2>Catégorie</h2>
          {makeBadge(data.category)}
        </div>
      </div>
    </div>
  )
}

export default Product
