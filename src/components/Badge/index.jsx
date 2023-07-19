function Badge({ children, color }) {
  let className = 'badge'

  if (color) className += ` badge--${color}`

  return <div className={className}>{children}</div>
}

export default Badge
