import type { InputHTMLAttributes } from 'react'

const fieldClassName =
  'box-border h-[40px] w-full rounded-lg border border-[var(--btn-secondary-bg)] px-3.5 py-2.5 text-base text-gray-900 placeholder:text-[var(--btn-secondary-text)] outline-none transition-colors focus:border-[var(--btn-primary)]'

type InputFormProps = {
  label: string
  placeholder: string
} & InputHTMLAttributes<HTMLInputElement>

export const InputForm = ({ label, placeholder, ...inputProps }: InputFormProps) => {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-[var(--color-text-secondary)]">{label}</span>
      <input type="text" placeholder={placeholder} className={fieldClassName} {...inputProps} />
    </label>
  )
}
