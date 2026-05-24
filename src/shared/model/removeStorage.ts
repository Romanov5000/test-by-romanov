import { STORAGE_KEYS } from '../config/constants'
import { getStorageApplications } from './getStorage'

export const removeStorage = (id: string) => {
  const next = getStorageApplications().filter((app) => app.id !== id)
  localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(next))
  window.dispatchEvent(new Event('storage-updated'))
}
