import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../app/provider/appContext'
import { ApplicationCard } from '../features/applications/ui/applicationCard'
import { APPLICATIONS_GOAL, BUTTON_SIZES } from '../shared/config/constants'
import { ROUTES } from '../shared/config/routes'
import { Button } from '../shared/ui/button'
import { Title } from '../shared/ui/title'

export const Applications = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { applications, setIsShowMotivationBanner } = useAppContext()

  useEffect(() => {
    setIsShowMotivationBanner(applications.length < APPLICATIONS_GOAL)

    return () => {
      setIsShowMotivationBanner(false)
    }
  }, [applications.length, setIsShowMotivationBanner])

  return (
    <section className="mx-auto w-full">
      <Title text={t('applications.title')} isDynamic>
        <Button
          text={t('common.createNew')}
          size={BUTTON_SIZES.MEDIUM}
          icon="/icons/plus.svg"
          onClick={() => navigate(ROUTES.CREATE_APPLICATION)}
        />
      </Title>
      <ul className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-4">
        {applications.map((application) => (
          <li key={application.id} className="min-w-0">
            <ApplicationCard application={application} />
          </li>
        ))}
      </ul>
    </section>
  )
}
