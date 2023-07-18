import { useEffect } from 'react'
import { Table, Column } from '../../components/Table'

const data = [
  ['Mens Cotton Jacket', 'men clothing', '55.99', '152.65'],
  [
    "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    'jewelry',
    '695',
    '152.65',
  ],
  ['White Gold Plated Princess', 'jewelry', '9.99', '152.65'],
]

function Home() {
  useEffect(() => {
    document.title = 'Products management'
  }, [])

  return (
    <div className="home">
      <h1>Products management</h1>

      <Table data={data}>
        <Column size="3">Product name</Column>
        <Column size="1">Category</Column>
        <Column size="1" align="right">
          Price
        </Column>
        <Column size="1" align="right">
          Price <span className="normal">(including VAT)</span>
        </Column>
      </Table>
    </div>
  )
}

export default Home