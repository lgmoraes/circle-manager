import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const buttonStyles = css`
  border-radius: ${({ $rounded }) => ($rounded ? '50px' : '')};

  &:focus-visible::after {
    border-radius: ${({ $rounded }) => ($rounded ? '50px' : '')};
  }
`

const StyledButton = styled.button`
  ${buttonStyles}
`

const StyledLink = styled(Link)`
  ${buttonStyles}
`

/**
    A custom button that can be rendered either as a native `button` component or as a Link when `to` is provided.

    @component
    @param {Object} props - The component properties.
    @param {ReactNode} props.children - The child elements to be displayed inside the button.
    @param {boolean} [props.secondary=false] - Specifies if the button should have a secondary style.
    @param {boolean} [props.rounded=false] - Specifies if the button should have rounded corners.
    @param {string} [props.type='button'] - The button type (default: 'button').
    @param {string|boolean} [props.to=false] - The destination URL if the button is a link. Otherwise, it's a submit button.
    @returns {ReactElement} The Button component.
*/
function Button({
  children,
  secondary = false,
  rounded = false,
  type = 'button',
  to = false,
  disabled = false,
}) {
  const buttonClass = `button${secondary ? ' button--secondary' : ''}`

  if (to)
    return (
      <StyledLink
        to={to}
        className={buttonClass}
        role="button"
        $rounded={rounded}
      >
        {children}
      </StyledLink>
    )

  return (
    <StyledButton
      className={buttonClass}
      type={type}
      $rounded={rounded}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

export default Button
