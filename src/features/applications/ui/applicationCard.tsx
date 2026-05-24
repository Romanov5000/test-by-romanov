import { type StorageType } from '../../../shared/model/getStorage'
import { CopyToClipboardButton } from '../../../shared/ui/copyToClipboardButton'
import { DeleteButton } from './deleteButton'

type ApplicationCardProps = {
  application: StorageType
}

export const ApplicationCard = ({ application }: ApplicationCardProps) => {
  return (
    <article className="flex h-[240px] w-full min-w-0 flex-col overflow-hidden rounded-xl bg-[var(--color-surface-muted)] p-6">
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <p className="line-clamp-6 whitespace-pre-wrap text-lg font-normal leading-7 text-[var(--color-text-muted)]">
          {application.text}
        </p>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-[var(--color-surface-muted)]"
        />
      </div>
      <div className="mt-2 flex shrink-0 items-center justify-between">
        <DeleteButton id={application.id} />
        <CopyToClipboardButton textToCopy={application.text} />
      </div>
    </article>
  )
}
