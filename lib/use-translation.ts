import { translations } from "./translations"

export function useTranslation() {
  const t = (path: string): string => {
    const keys = path.split('.')
    let value: any = translations

    for (const key of keys) {
      value = value?.[key]
      if (value === undefined) return path
    }

    return typeof value === 'string' ? value : path
  }

  return { t }
}
