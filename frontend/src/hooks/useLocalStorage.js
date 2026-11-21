import { useEffect, useState } from 'react'

// Reads a saved value once when the hook is first used.
function readStoredValue(key, initialValue) {
  if (typeof window === 'undefined') {
    return typeof initialValue === 'function' ? initialValue() : initialValue
  }

  try {
    const savedValue = window.localStorage.getItem(key)

    if (savedValue !== null) {
      return JSON.parse(savedValue)
    }
  } catch {
    // Invalid JSON or unavailable browser storage falls back to the default.
  }

  return typeof initialValue === 'function' ? initialValue() : initialValue
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => readStoredValue(key, initialValue))

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // The UI still works for this session if storage is unavailable or full.
    }
  }, [key, value])

  function updateValue(nextValue) {
    setValue((currentValue) =>
      typeof nextValue === 'function'
        ? nextValue(currentValue)
        : nextValue,
    )
  }

  return [value, updateValue]
}

export default useLocalStorage
