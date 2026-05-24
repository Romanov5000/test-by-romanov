import { ICON_SIZES } from '../config/constants'
import {
  buttonClasses,
  colorClasses,
  sizeClasses,
  spinnerBgClasses,
  spinnerMaskClasses,
} from './buttonStyles'

type ButtonPropsType = {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit'
  loading?: boolean
  disabled?: boolean
  size?: 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'outline'
  icon?: string
  iconSize?: number
}

export const Button = ({
  text,
  disabled,
  icon,
  onClick,
  loading,
  type = 'button',
  size = 'medium',
  color = 'primary',
  iconSize = ICON_SIZES.S,
}: ButtonPropsType) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (loading) {
      event.preventDefault()
      return
    }
    onClick?.()
  }

  return (
    <button
      type={type}
      className={`${buttonClasses} ${sizeClasses[size]} ${colorClasses[color]}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {loading ? (
        <span
          className={`${spinnerMaskClasses} ${spinnerBgClasses[color]}`}
          aria-label="Loading..."
        />
      ) : (
        <>
          {icon && <img src={icon} alt={'button icon'} width={iconSize} height={iconSize} />}
          <span className="pt-1">{text}</span>
        </>
      )}
    </button>
  )
}
