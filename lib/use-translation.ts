import { useI18n } from "./i18n-context"
import { translations } from "./translations"

export function useTranslation() {
  const { language } = useI18n()

  const t = (path: string): string => {
    const keys = path.split('.')
    let value: any = translations

    for (const key of keys) {
      value = value?.[key]
      if (!value) return path
    }

    return value[language] || path
  }

  return { t, language }
}
