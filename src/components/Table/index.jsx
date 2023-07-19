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
                {rowData[indexCell]}
              </Cell>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Column({ children, size = '1', align = 'left' }) {
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
