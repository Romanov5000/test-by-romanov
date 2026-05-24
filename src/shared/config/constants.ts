export const APPLICATIONS_GOAL = 5

export const PROGRESS_SLOT_KEYS = Array.from(
  { length: APPLICATIONS_GOAL },
  (_, i) => `progress-slot-${i + 1}`
) as readonly string[]

export const ICON_SIZES = {
  S: 14,
  M: 24,
} as const

export const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const

export const STORAGE_KEYS = {
  APPLICATIONS: 'applications',
} as const
