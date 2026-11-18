import './daily-challenges.css'

function Card({ title, children, variant = 'primary' }) {
  const allowedVariants = ['primary', 'secondary', 'outlined']
  const selectedVariant = allowedVariants.includes(variant) ? variant : 'primary'

  return (
    <article className={`daily-card daily-card--${selectedVariant}`}>
      {title && <h3>{title}</h3>}
      <div>{children}</div>
    </article>
  )
}

export default Card
