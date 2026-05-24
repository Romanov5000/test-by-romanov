import { useTranslation } from 'react-i18next'
import { removeStorage } from '../../../shared/model/removeStorage'

type DeleteButtonPropsType = {
  id: string
}

export const DeleteButton = ({ id }: DeleteButtonPropsType) => {
  const { t } = useTranslation()

  const handleDelete = () => {
    removeStorage(id)
  }

  return (
    <button
      className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-[#475467] transition-opacity hover:opacity-80"
      type="button"
      onClick={handleDelete}
    >
      <img
        src="/icons/trash.svg"
        alt="delete"
        width={20}
        height={20}
        className="shrink-0"
        aria-hidden
      />
      <span className="pt-1 leading-none lg:pt-2">{t('common.delete')}</span>
    </button>
  )
}
