import { useEffect } from 'react'
import { Table, Column } from '../../components/Table'
import { formatPrice } from '../../utils/functions'
import Badge from '../../components/Badge'
import { useQuery } from '@tanstack/react-query'

const getProducts = async () =>
  fetch('https://fakestoreapi.com/products').then((res) => res.json())

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
        <Column
          dataKey="category"
          render={(category) => <Badge color="green">{category}</Badge>}
        >
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
