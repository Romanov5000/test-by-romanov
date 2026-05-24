import { Header } from '../../shared/layout/header'
import { MotivationBanner } from '../../shared/layout/motivationBanner'
import { useAppContext } from '../provider/appContext'

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { isShowMotivationBanner } = useAppContext()

  return (
    <div className="flex min-h-screen min-w-0 flex-col bg-white px-4 pt-6 pb-20 sm:px-8 sm:pt-8 sm:pb-24 lg:px-16 xl:px-[160px] xl:pb-[120px]">
      <Header />
      <main className="min-w-0 flex-1">{children}</main>
      {isShowMotivationBanner && <MotivationBanner />}
    </div>
  )
}
