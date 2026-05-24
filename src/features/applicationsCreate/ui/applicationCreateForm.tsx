import { useAppContext } from '../../../app/provider/appContext'
import { BUTTON_SIZES, ICON_SIZES } from '../../../shared/config/constants'
import { Button } from '../../../shared/ui/button'
import { Title } from '../../../shared/ui/title'
import { useApplicationCreateForm } from '../model/useApplicationCreateForm'
import { InputForm } from './inputForm'
import { TextForm } from './textForm'

export const ApplicationCreateForm = () => {
  const { isLoading, content } = useAppContext()
  const {
    t,
    register,
    title,
    isDynamicTitle,
    detailsLength,
    isDetailsOverLimit,
    isFormValid,
    detailsBorderClass,
    setIsDetailsFocused,
    onSubmit,
  } = useApplicationCreateForm()
  const buttonColor = content ? 'outline' : isFormValid ? 'primary' : 'secondary'

  return (
    <section className="mx-auto w-full min-w-0 lg:flex-1">
      <Title isDynamic={isDynamicTitle} text={title} />
      <form className="flex flex-col gap-4" autoComplete="off" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          <InputForm
            label={t('applicationCreate.jobTitle')}
            placeholder={t('applicationCreate.jobTitlePlaceholder')}
            {...register('jobTitle')}
          />
          <InputForm
            label={t('applicationCreate.company')}
            placeholder={t('applicationCreate.companyPlaceholder')}
            {...register('company')}
          />
        </div>
        <InputForm
          label={t('applicationCreate.skills')}
          placeholder={t('applicationCreate.skillsPlaceholder')}
          {...register('skills')}
        />
        <TextForm
          label={t('applicationCreate.details')}
          placeholder={t('applicationCreate.detailsPlaceholder')}
          detailsBorderClass={detailsBorderClass}
          detailsLength={detailsLength}
          isDetailsOverLimit={isDetailsOverLimit}
          onFocusChange={setIsDetailsFocused}
          {...register('details')}
        />
        <div className="[&>button]:w-full">
          <Button
            type="submit"
            size={BUTTON_SIZES.LARGE}
            color={buttonColor}
            disabled={!isFormValid}
            loading={isLoading}
            iconSize={ICON_SIZES.M}
            icon={content ? '/icons/refresh.svg' : undefined}
            text={t(`applicationCreate.${content ? 'tryAgain' : 'generateNow'}`)}
          />
        </div>
      </form>
    </section>
  )
}
