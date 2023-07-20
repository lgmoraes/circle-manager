import React from 'react'

export function Table({ children, data }) {
  const columns = children.filter((c) => c.type.name === 'Column')

  if (data === undefined) return <p>Aucune données</p>

  return (
    <div className="table" role="table" aria-label="Produits">
      {/* // Header */}
      <div className="table__thead" role="rowgroup">
        <div className="table__row" role="row">
          {children.map((col, index) => (
            <Column key={index} {...col.props} />
          ))}
        </div>
      </div>

      {/* Cells */}
      <div className="table__tbody" role="rowgroup">
        {data.map((product, productIndex) => (
          <div key={productIndex} className="table__row" role="row">
            {columns.map((col, indexCell) => (
              <Cell
                key={indexCell}
                dataKey={col.props.dataKey}
                size={col.props.size}
                align={col.props.align}
                fontWeight={col.props.fontWeight}
              >
                {col.props.render
                  ? col.props.render(product[col.props.dataKey])
                  : product[col.props.dataKey]}
              </Cell>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Column component represents a column in the table.
 * It defines the size, alignment, and optionally, custom rendering for the column.
 *
 * @component
 * @param {object} props - The props object for the Column component.
 * @param {React.ReactNode} props.children - Header label.
 * @param {string} props.dataKey - The key to bind the corresponding data in the data source.
 * @param {string} [props.size='1'] - The relative size of the column compared to other columns.
 * @param {('left'|'center'|'right')} [props.align='left'] - The alignment of the column content.
 * @param {string} [props.fontWeight='normal'] - The font weight of the column.
 * @param {function} [props.render=null] - Optional custom rendering function for the column content.
 * @returns {JSX.Element} The JSX element representing the column header.
 *
 * @example
 * <Column size="2" align="center" render={(rowData, index) => <strong>{rowData[index]}€</strong>}>
 *   Product Price
 * </Column>
 */
export function Column({
  children,
  dataKey,
  size = '1',
  align = 'left',
  fontWeight = 'normal',
  render = null,
}) {
  return (
    <div
      className="table__th"
      role="columnheader"
      style={{
        flexBasis: 0,
        flexGrow: size,
        textAlign: align,
      }}
    >
      {children}
    </div>
  )
}

function Cell({ children, size = '1', align = 'left', fontWeight = 'normal' }) {
  return (
    <div
      className="table__cell"
      role="cell"
      style={{
        flexBasis: 0,
        flexGrow: size,
        textAlign: align,
        fontWeight: fontWeight,
      }}
    >
      {children}
    </div>
  )
}
