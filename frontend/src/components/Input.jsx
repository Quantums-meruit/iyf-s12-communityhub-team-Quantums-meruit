// A visible label is required so every shared field remains accessible.
function Input({ id, label, type = 'text', className = '', ...props }) {
  const classes = ['ui-input', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <label className="ui-input__label" htmlFor={id}>
        {label}
      </label>
      <input className="ui-input__control" id={id} type={type} {...props} />
    </div>
  )
}

export default Input
