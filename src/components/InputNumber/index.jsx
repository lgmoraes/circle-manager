import { formatNumber } from '../../utils/functions'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
  position: relative;
`

/**
 * InputNumber component that allows users to input numeric values.
 * @param {Object} props - The component props.
 * @param {number|string} props.value - The current value of the input.
 * @param {Function} props.setValue - Callback function to update the value.
 * @param {number|false} [props.min=false] - The minimum allowed value (false = no minimum).
 * @param {number|false} [props.max=false] - The maximum allowed value (false = no maximum).
 * @param {string|React.ReactNode} [props.suffix] - An optional suffix to display inside the input after the numeric value.
 * @returns {JSX.Element} A React JSX element representing the InputNumber component.
 */
function InputNumber({ value, setValue, min = false, max = false, suffix }) {
  const onchange = (event) => {
    setValue(event.target.value)
  }

  const onblur = (event) => {
    let n = event.target.value
    n = n.replace(',', '.')

    n = parseFloat(n)
    if (min !== false) n = n < min ? min : n
    if (max !== false) n = n > max ? max : n

    setValue(formatNumber(n))
  }

  return (
    <Container>
      <input
        className="inputNumber"
        type="text"
        value={value}
        role="spinbutton"
        onChange={onchange}
        onBlur={onblur}
      />
      {suffix ? <div className="inputNumber__suffix">{suffix}</div> : null}
    </Container>
  )
}

export default InputNumber
