export const buttonBaseClasses =
  'border shadow-[0_1px_2px_rgba(16,24,40,0.05)] disabled:cursor-not-allowed disabled:opacity-70'

export const neutralButtonClasses =
  'border-[var(--btn-secondary-bg)] text-[var(--color-text-secondary)] enabled:hover:bg-[#c4cad4]'

export const buttonClasses =
  'inline-flex cursor-pointer items-center justify-center gap-3 rounded-md font-semibold transition-colors'

export const colorClasses = {
  primary: `${buttonBaseClasses} border-[var(--btn-primary)] bg-[var(--btn-primary)] text-white enabled:hover:bg-[#066a3a]`,
  secondary: `${buttonBaseClasses} ${neutralButtonClasses} bg-[var(--btn-secondary-bg)]`,
  outline: `${buttonBaseClasses} ${neutralButtonClasses} bg-transparent`,
} as const

export const sizeClasses = {
  medium: 'px-4 py-2 text-sm',
  large:
    'box-border min-h-[52px] px-4 py-2 text-base leading-none lg:min-h-[60px] lg:max-h-[60px] lg:px-7 lg:py-0 lg:text-[18px]',
} as const

export const spinnerMaskClasses =
  'inline-block h-6 w-6 shrink-0 animate-[spin_1.5s_linear_infinite] [mask:url(/icons/spinner.svg)_center/contain_no-repeat] [-webkit-mask:url(/icons/spinner.svg)_center/contain_no-repeat]'

export const spinnerBgClasses = {
  primary: 'bg-[var(--color-white)]',
  secondary: 'bg-[var(--color-white)]',
  outline: 'bg-[var(--color-text-secondary)]',
} as const
