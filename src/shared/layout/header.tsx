import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../app/provider/appContext'
import { APPLICATIONS_GOAL } from '../config/constants'
import { ROUTES } from '../config/routes'
import { ProgressIndicator } from '../ui/progressIndicator'

export const Header = () => {
  const { t } = useTranslation()
  const { applications } = useAppContext()
  const isGoalAchieved = applications.length >= APPLICATIONS_GOAL

  return (
    <header className="flex min-w-0 items-center justify-between gap-2 pb-4 sm:gap-3 sm:pb-8">
      <Link to={ROUTES.APPLICATIONS} className="flex min-w-0 shrink items-center">
        <img
          src="/icons/logo.svg"
          alt="logo"
          className="h-10 w-auto max-w-full object-contain object-left sm:h-12"
        />
      </Link>
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <span className="hidden whitespace-nowrap pt-0.5 text-lg font-normal text-gray-500 sm:inline-flex sm:items-center">
          {`${applications.length}/${APPLICATIONS_GOAL} ${t('header.applicationsGenerated')}`}
        </span>
        {isGoalAchieved ? (
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
            <img src="/icons/check.svg" alt="check icon" className="h-4 w-4" />
          </div>
        ) : (
          <ProgressIndicator variant="dots" />
        )}
        <Link
          to={ROUTES.APPLICATIONS}
          aria-label={t('header.homeAriaLabel')}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white transition-colors hover:bg-gray-50"
        >
          <img src="/icons/home.svg" alt="home" />
        </Link>
      </div>
    </header>
  )
}
