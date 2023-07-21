import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Table, Column } from '../../components/Table'
import { makeBadge } from '../../components/Badge'
import { formatPrice } from '../../utils/functions'
import { getProducts } from '../../utils/api'


function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  useEffect(() => {
    document.title = 'Products management'
  }, [])

  if (isLoading) return <p>Loader</p>
  if (isError) return <p>Something went wrong...</p>

  return (
    <div className="home">
      <h1>Products management</h1>

      <Table data={data}>
        <Column dataKey="title" size="3" fontWeight="bold">
          Product name
        </Column>
        <Column dataKey="category" render={(category) => makeBadge(category)}>
          Category
        </Column>
        <Column
          dataKey="price"
          align="right"
          render={(price) => formatPrice(price)}
        >
          Price
        </Column>
        <Column
          dataKey="price"
          align="right"
          render={(price) => formatPrice(price * 1.2)}
        >
          Price <span className="normal">(including VAT)</span>
        </Column>
      </Table>
    </div>
  )
}

export default Home
