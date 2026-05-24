import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../app/provider/appContext'
import { APPLICATIONS_GOAL, BUTTON_SIZES } from '../config/constants'
import { ROUTES } from '../config/routes'
import { Button } from '../ui/button'
import { ProgressIndicator } from '../ui/progressIndicator'

export const MotivationBanner = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { applications } = useAppContext()

  return (
    <div className="mt-8 rounded-2xl bg-[var(--light-green)] py-4 sm:py-8 lg:mt-12">
      <div className="mx-auto max-w-md rounded-xl px-4 py-5 text-center sm:py-6 lg:px-0">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900 sm:text-4xl">
          {t('motivationBanner.title')}
        </h2>
        <p className="mb-5 text-base text-gray-500 sm:text-lg">
          {t('motivationBanner.description')}
        </p>
        <div className="mb-5 flex justify-center [&>button]:w-full lg:[&>button]:w-auto">
          <Button
            text={t('common.createNew')}
            size={BUTTON_SIZES.LARGE}
            icon="/icons/plus.svg"
            onClick={() => navigate(ROUTES.CREATE_APPLICATION)}
          />
        </div>
        <ProgressIndicator variant="bars" />
        <p className="mt-2 text-lg text-gray-500">
          {applications.length} {t('motivationBanner.outOf')} {APPLICATIONS_GOAL}
        </p>
      </div>
    </div>
  )
}
