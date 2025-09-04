import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface LanguageSelectProps {
  value?: string
  onChange?: (value: string) => void
}

const options = [
  { value: 'en', label: 'English' },
  { value: 'ko', label: '한국어' },
]
export default function LanguageSelect({
  value,
  onChange,
}: LanguageSelectProps) {
  const [open, setOpen] = useState(false)
  const [userValue, setUserValue] = useState(value || options[0].value)
  const current = useMemo(() => {
    const find = Object.values(options).find(
      (option) => option.value === userValue,
    )
    return find || options[0]
  }, [userValue])
  const rootRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        closeOptions()
      }
    }
    document.addEventListener('click', clickOutside)
    return () => {
      document.removeEventListener('click', clickOutside)
    }
  }, [])
  const closeOptions = useCallback(() => setOpen(false), [])
  const toggleOptions = () => {
    setOpen(!open)
  }
  const selectValue = (value: string) => {
    setUserValue(value)
    if (onChange) {
      onChange(value)
    }
    closeOptions()
  }

  return (
    <div className="language-select" ref={rootRef}>
      <label className="label mb-1">Languages</label>
      <div className={['select-input', open ? 'open' : ''].join(' ')}>
        <span className="user-select" onClick={toggleOptions}>
          {current.label}
          <i className="suffix-icon">
            <ChevronDown size={16} />
          </i>
        </span>
        <ul className="options">
          {options.map((option) => (
            <li
              key={option.value}
              className="option"
              onClick={() => selectValue(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
