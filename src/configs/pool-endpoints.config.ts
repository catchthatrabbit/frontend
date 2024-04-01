import { DEFAULT_API_URL } from "@site/src/constants/links"
import { STANDARD_REGIONS_API_KEYS } from "@site/src/Api/types"

export const EU_PRIMARY_API = DEFAULT_API_URL.EU;
export const EU_BACKUP_API = DEFAULT_API_URL.EU_BACKUP;
export const AS_PRIMARY_API = DEFAULT_API_URL.AS;
export const AS_BACKUP_API = DEFAULT_API_URL.AS_BACKUP;
export const US_PRIMARY_API = DEFAULT_API_URL.US;
export const US_BACKUP_API = DEFAULT_API_URL.US_BACKUP;

export const API_SWITCH:Record<STANDARD_REGIONS_API_KEYS, string> = {
  EU: EU_PRIMARY_API,
  EU_BACKUP: EU_BACKUP_API,
  AS: AS_PRIMARY_API,
  AS_BACKUP: AS_BACKUP_API,
  US: US_PRIMARY_API,
  US_BACKUP: US_BACKUP_API
}

export const AGGREGATION_APIS = [
  EU_PRIMARY_API,
  EU_BACKUP_API,
  AS_PRIMARY_API,
  AS_BACKUP_API,
  US_PRIMARY_API,
  US_BACKUP_API,
]