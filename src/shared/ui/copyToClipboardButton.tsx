import { useTranslation } from 'react-i18next'

type CopyToClipboardButtonProps = {
  textToCopy: string
}

export const CopyToClipboardButton = ({ textToCopy }: CopyToClipboardButtonProps) => {
  const { t } = useTranslation()

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy || '')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-[#475467] transition-opacity enabled:hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <span className="pt-1 leading-none">{t('common.copyToClipboard')}</span>
      <img src="/icons/copy.svg" alt="" width={20} height={20} className="shrink-0" aria-hidden />
    </button>
  )
}
