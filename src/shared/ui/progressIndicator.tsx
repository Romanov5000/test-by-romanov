import { useAppContext } from '../../app/provider/appContext'
import { APPLICATIONS_GOAL, PROGRESS_SLOT_KEYS } from '../config/constants'

type ProgressIndicatorVariantType = 'dots' | 'bars'

type ProgressIndicatorPropsType = {
  variant: ProgressIndicatorVariantType
}

const variantStyles: Record<
  ProgressIndicatorVariantType,
  { container: string; segment: string; filled: string; empty: string }
> = {
  dots: {
    container: 'flex items-center gap-1',
    segment: 'block h-2 w-2 shrink-0 rounded-full',
    filled: 'bg-gray-900',
    empty: 'bg-gray-900/25',
  },
  bars: {
    container: 'flex items-center justify-center gap-1.5',
    segment: 'block h-1.5 w-8 rounded-full',
    filled: 'bg-gray-800',
    empty: 'bg-gray-300',
  },
}

export function ProgressIndicator({ variant }: ProgressIndicatorPropsType) {
  const { applications } = useAppContext()
  const slots = PROGRESS_SLOT_KEYS.slice(0, APPLICATIONS_GOAL)
  const styles = variantStyles[variant]

  return (
    <div className={styles.container}>
      {slots.map((key, index) => (
        <span
          key={key}
          className={`${styles.segment} ${index < applications.length ? styles.filled : styles.empty}`}
        />
      ))}
    </div>
  )
}
