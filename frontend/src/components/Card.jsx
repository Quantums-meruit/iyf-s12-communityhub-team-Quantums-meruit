// A simple surface for grouping related content without imposing a layout.
function Card({ children, className = '', ...props }) {
  const classes = ['ui-card', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card
