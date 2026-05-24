import { ApplicationCreateForm } from '../features/applicationsCreate/ui/applicationCreateForm'
import { LetterDisplay } from '../features/applicationsCreate/ui/letterDisplay'

export const ApplicationsCreate = () => {
  return (
    <div className="mx-auto flex w-full min-w-0 flex-col items-start gap-6 lg:flex-row lg:gap-8">
      <ApplicationCreateForm />
      <LetterDisplay />
    </div>
  )
}
