import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import useTranslation from 'next-translate/useTranslation'

export default function FourZeroFour() {
  const { t } = useTranslation()
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">{t('404:bigText')}</p>
        <p className="mb-8">{t('404:littleText')}</p>
        <Link href="/">
          <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500">
            {t('404:backButton')}
          </button>
        </Link>
      </div>
    </>
  )
}
