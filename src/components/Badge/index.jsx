const colors = {
  jewelery: 'green',
  "men's clothing": 'orange',
  "women's clothing": 'violet',
  electronics: 'primary',
}

export default function Badge({ children, color }) {
  let className = 'badge'

  if (color) className += ` badge--${color}`

  return <div className={className}>{children}</div>
}

export const makeBadge = (category) => {
  return <Badge color={colors[category]}>{category}</Badge>
}
