import { STORAGE_KEYS } from '../config/constants'
import { getStorageApplications, type StorageType } from './getStorage'

export const addStorage = ({ id, text }: StorageType) => {
  const applications = getStorageApplications()
  const next = [...applications, { id, text }]
  localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(next))
  window.dispatchEvent(new Event('storage-updated'))
}
