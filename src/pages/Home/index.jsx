import { useEffect } from 'react'
import Button from '../../components/Button'

function Home() {
  useEffect(() => {
    document.title = 'Products management'
  }, [])

  return (
    <main className="home">
      <h1>Products management</h1>

      <div className="home__buttons">
        <Button>Button</Button>
      </div>
    </main>
  )
}

export default Home
