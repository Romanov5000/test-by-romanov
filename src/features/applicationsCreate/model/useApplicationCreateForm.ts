import { useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../../../app/provider/appContext'
import { APPLICATIONS_GOAL } from '../../../shared/config/constants'
import { addStorage } from '../../../shared/model/addStorage'
import { getStorageApplications } from '../../../shared/model/getStorage'
import { generateApplication } from '../api/generateApplication'

export type ApplicationCreateFormType = {
  jobTitle: string
  company: string
  skills: string
  details: string
}

export const DETAILS_MAX_LENGTH = 1200
const detailsShadowDefault = 'shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]'
const detailsShadowFocused =
  'shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),0px_0px_0px_4px_rgba(211,248,223,1)]'
const detailsShadowError =
  'shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),0px_0px_0px_4px_rgba(254,228,226,1)]'

export const useApplicationCreateForm = () => {
  const { t } = useTranslation()
  const { setIsLoading, setContent, setIsShowMotivationBanner } = useAppContext()
  const [isDetailsFocused, setIsDetailsFocused] = useState(false)
  const abortRef = useRef<AbortController | null>(null)

  const { register, handleSubmit, watch } = useForm<ApplicationCreateFormType>({
    defaultValues: {
      jobTitle: '',
      company: '',
      skills: '',
      details: '',
    },
    mode: 'onChange',
  })

  const jobTitle = watch('jobTitle')
  const company = watch('company')
  const skills = watch('skills')
  const details = watch('details')

  const detailsLength = details.length
  const isDetailsOverLimit = detailsLength > DETAILS_MAX_LENGTH

  const isDynamicTitle = jobTitle.trim() !== '' && company.trim() !== ''

  const title = useMemo(() => {
    if (isDynamicTitle) {
      return `${jobTitle.trim()}, ${company.trim()}`
    }
    return t('applicationCreate.title')
  }, [jobTitle, company, isDynamicTitle, t])

  const isFormValid =
    jobTitle.trim() !== '' &&
    company.trim() !== '' &&
    skills.trim() !== '' &&
    details.trim() !== '' &&
    !isDetailsOverLimit

  const detailsBorderClass = isDetailsOverLimit
    ? `border border-[#FDA29B] focus:border-[#FDA29B] ${detailsShadowError}`
    : isDetailsFocused
      ? `border border-[#73E2A3] ${detailsShadowFocused}`
      : `border border-[var(--btn-secondary-bg)] ${detailsShadowDefault}`

  const onSubmit = async (data: ApplicationCreateFormType) => {
    const controller = new AbortController()
    abortRef.current?.abort()
    abortRef.current = controller
    setIsLoading(true)
    try {
      const text = await generateApplication(data, controller.signal)
      setContent(text)
      addStorage({ id: crypto.randomUUID(), text })
      setIsShowMotivationBanner(getStorageApplications().length < APPLICATIONS_GOAL)
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      setContent('')
      abortRef.current?.abort()
      setIsShowMotivationBanner(false)
    }
  }, [setContent])

  return {
    t,
    register,
    title,
    isDynamicTitle,
    detailsLength,
    isDetailsOverLimit,
    isFormValid,
    detailsBorderClass,
    isDetailsFocused,
    setIsDetailsFocused,
    onSubmit: handleSubmit(onSubmit),
  }
}
