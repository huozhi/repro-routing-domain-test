export default function Domain({ locale }) {
  return 'domain' + '-' + locale
}

export const getStaticProps = ({ locale, locales }) => {
  return {
    props: {
      locale,
      locales,
    },
  }
}

export const getStaticPaths = ({ locales }) => {
  const paths = []

  for (const locale of locales) {
    paths.push({ params: { domain: 'betway.com' }, locale })
  }

  return {
    paths,
    fallback: true,
  }
}
