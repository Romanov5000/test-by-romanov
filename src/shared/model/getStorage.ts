import { STORAGE_KEYS } from '../config/constants'

export type StorageType = {
  id: string
  text: string
}

export const getStorageApplications = (): StorageType[] => {
  const raw = localStorage.getItem(STORAGE_KEYS.APPLICATIONS)
  if (!raw) return []

  const parsed = JSON.parse(raw)
  return Array.isArray(parsed) ? parsed : []
}
