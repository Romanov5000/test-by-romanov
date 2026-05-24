import type { Ref, TextareaHTMLAttributes } from 'react'
import { DETAILS_MAX_LENGTH } from '../model/useApplicationCreateForm'
import { useTextareaScrollbar } from '../model/useTextareaScrollbar'

type TextFormProps = {
  label: string
  placeholder: string
  detailsBorderClass: string
  detailsLength: number
  isDetailsOverLimit: boolean
  onFocusChange: (focused: boolean) => void
  ref?: Ref<HTMLTextAreaElement>
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextForm = ({
  label,
  placeholder,
  detailsBorderClass,
  detailsLength,
  isDetailsOverLimit,
  onFocusChange,
  ref: fieldRef,
  ...textareaProps
}: TextFormProps) => {
  const {
    onBlur: fieldOnBlur,
    onScroll: fieldOnScroll,
    onInput: fieldOnInput,
    ...restTextareaProps
  } = textareaProps

  const { assignRef, thumb, handleScroll, handleInput } = useTextareaScrollbar(
    detailsLength,
    fieldRef
  )

  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-[var(--color-text-secondary)]">{label}</span>
      <div className="relative h-[180px] w-full lg:h-[236px]">
        <textarea
          ref={assignRef}
          placeholder={placeholder}
          className={`details-textarea box-border h-full min-h-[180px] w-full resize-none overflow-y-auto rounded-lg bg-white px-3.5 py-3 text-base text-gray-900 placeholder:text-[var(--btn-secondary-text)] outline-none transition-[border-color,box-shadow] lg:min-h-[236px] ${detailsBorderClass}`}
          {...restTextareaProps}
          onScroll={(e) => handleScroll(e, fieldOnScroll)}
          onInput={(e) => handleInput(e, fieldOnInput)}
          onFocus={() => onFocusChange(true)}
          onBlur={(e) => {
            fieldOnBlur?.(e)
            onFocusChange(false)
          }}
        />
        {thumb.visible && (
          <div
            className="pointer-events-none absolute right-2 w-1 rounded bg-[var(--btn-secondary-bg)]"
            style={{ height: thumb.height, top: thumb.top }}
            aria-hidden
          />
        )}
      </div>
      <span
        className={`text-sm ${isDetailsOverLimit ? 'text-[#F04438]' : 'text-[var(--color-text-muted)]'}`}
      >
        {detailsLength}/{DETAILS_MAX_LENGTH}
      </span>
    </label>
  )
}
