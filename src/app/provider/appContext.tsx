import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { getStorageApplications, type StorageType } from '../../shared/model/getStorage'

type AppContextType = {
  content: string | null
  setContent: (value: string) => void
  isLoading: boolean
  setIsLoading: (value: boolean) => void
  applications: StorageType[]
  isShowMotivationBanner: boolean
  setIsShowMotivationBanner: (value: boolean) => void
}

const AppContext = createContext<AppContextType | null>(null)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [applications, setApplications] = useState(() => getStorageApplications())
  const [content, setContentState] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isShowMotivationBanner, setIsShowMotivationBanner] = useState(false)

  const setContent = useCallback((value: string) => {
    setContentState(value)
  }, [])

  const refreshApplications = useCallback(() => {
    setApplications(getStorageApplications())
  }, [])

  useEffect(() => {
    refreshApplications()
    window.addEventListener('storage-updated', refreshApplications)
    return () => window.removeEventListener('storage-updated', refreshApplications)
  }, [refreshApplications])

  const value = useMemo(
    () => ({
      content,
      setContent,
      isLoading,
      setIsLoading,
      applications,
      isShowMotivationBanner,
      setIsShowMotivationBanner,
    }),
    [
      content,
      setContent,
      isLoading,
      applications,
      isShowMotivationBanner,
      setIsShowMotivationBanner,
    ]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }

  return context
}
