import { useTranslation } from 'react-i18next'
import { useAppContext } from '../../../app/provider/appContext'
import { CopyToClipboardButton } from '../../../shared/ui/copyToClipboardButton'
import { Loader } from './loader'

export const LetterDisplay = () => {
  const { content, isLoading } = useAppContext()
  const { t } = useTranslation()
  const textToDisplay = content ? content : t('letterDisplay.placeholder')

  return (
    <div className="relative flex min-h-[360px] w-full min-w-0 flex-col rounded-xl bg-[var(--color-surface-muted)] p-4 lg:min-h-[600px] lg:flex-1 lg:p-6">
      <div
        className={
          isLoading
            ? 'flex min-h-0 flex-1 items-center justify-center'
            : 'min-h-0 flex-1 overflow-y-auto pr-2'
        }
      >
        {isLoading ? (
          <Loader />
        ) : (
          <p className="whitespace-pre-wrap text-base font-normal leading-6 text-[var(--color-text-muted)] lg:text-lg lg:leading-7">
            {textToDisplay}
          </p>
        )}
      </div>
      {!isLoading && (
        <div className="mt-4 flex w-full justify-end">
          <CopyToClipboardButton textToCopy={content ?? ''} />
        </div>
      )}
    </div>
  )
}
