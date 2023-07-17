import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Line1 = styled.p`
  font-size: 3em;
`
const Line2 = styled.p`
  font-size: 11em;
`
const Line3 = styled.p`
  font-size: 3em;
`
const Line4 = styled.p`
  font-size: 2.5em;
`
const Line5 = styled.p`
  font-size: 4em;
`

const Container = styled.div`
  margin: 4em;
  text-align: center;

  ${Line1}, ${Line2}, ${Line3}, ${Line4}, ${Line5} {
    width: fit-content;
    text-align: left;
    margin: -0.2em 0;
    animation: 1.5s toRight, 1.5s fade;
  }
  ${Line4} {
    margin: 0.5em 0;
  }
  .button {
    margin: auto;
    margin-top: 5em;
  }
`

/**
 * Error Page
 */
function Error404() {
  useEffect(() => {
    document.title = 'Erreur 404'
  })

  return (
    <div className="Error404">
      <Container>
        <Line1>ERROR</Line1>
        <Line2>404</Line2>
        <Line3>Oups!</Line3>
        <Line4>La page que vous demandez</Line4>
        <Line5>n'existe pas.</Line5>

        <Link to="/" className="button">
          Retourner sur la page d’accueil
        </Link>
      </Container>
    </div>
  )
}

export default Error404
