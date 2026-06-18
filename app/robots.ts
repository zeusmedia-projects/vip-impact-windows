import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Set to true by default for demo environment safety. 
  // Change process.env.NEXT_PUBLIC_IS_DEMO to 'false' in production env variables to enable indexation.
  const isDemo = process.env.NEXT_PUBLIC_IS_DEMO !== 'false';

  if (isDemo) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    }
  }

  const BASE_URL = 'https://www.myvipwindows.com'
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
