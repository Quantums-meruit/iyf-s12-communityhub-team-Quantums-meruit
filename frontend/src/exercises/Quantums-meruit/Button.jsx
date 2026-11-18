import './daily-challenges.css'

function Button({
  text = 'Click',
  onClick,
  variant = 'primary',
  disabled = false,
  size = 'medium',
  loading = false,
  type = 'button',
}) {
  const allowedVariants = ['primary', 'secondary', 'danger']
  const allowedSizes = ['small', 'medium', 'large']
  const selectedVariant = allowedVariants.includes(variant) ? variant : 'primary'
  const selectedSize = allowedSizes.includes(size) ? size : 'medium'

  return (
    <button
      className={`daily-button daily-button--${selectedVariant} daily-button--${selectedSize}`}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && <span className="daily-spinner" aria-hidden="true" />}
      <span>{loading ? 'Loading...' : text}</span>
    </button>
  )
}

export default Button
