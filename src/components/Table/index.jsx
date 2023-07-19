import React from 'react'

export function Table({ children, data }) {
  const columns = children.filter((c) => c.type.name === 'Column')

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
        {data.map((rowData, indexRow) => (
          <div key={indexRow} className="table__row" role="row">
            {columns.map((col, indexCell) => (
              <Cell
                key={indexCell}
                size={col.props.size}
                align={col.props.align}
              >
                {col.props.render
                  ? col.props.render(rowData, indexCell)
                  : rowData[indexCell]}
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
 * @param {string} [props.size='1'] - The relative size of the column compared to other columns.
 * @param {('left'|'center'|'right')} [props.align='left'] - The alignment of the column content.
 * @param {function} [props.render=null] - Optional custom rendering function for the column content.
 * @returns {JSX.Element} The JSX element representing the column header.
 *
 * @example
 * // Example usage of the Column component
 * <Column size="2" align="center" render={(rowData, index) => <strong>{rowData[index]}€</strong>}>
 *   Product Price
 * </Column>
 */
export function Column({
  children,
  size = '1',
  align = 'left',
  render = null,
}) {
  return (
    <div
      className="table__th"
      role="columnheader"
      style={{ flexBasis: 0, flexGrow: size, textAlign: align }}
    >
      {children}
    </div>
  )
}

function Cell({ children, size = '1', align = 'left' }) {
  return (
    <div
      className="table__cell"
      role="cell"
      style={{ flexBasis: 0, flexGrow: size, textAlign: align }}
    >
      {children}
    </div>
  )
}
