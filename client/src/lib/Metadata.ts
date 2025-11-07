export function getPageMetadata({ title, description, path }: {
  title: string;
  description?: string;
  path?: string;
}) {
  const baseUrl = "https://www.perfinexacloudtech.com";

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: path ? `${baseUrl}${path}` : baseUrl,
    },
      icons: {
    icon: '/favicon.png',
  },
  };
}
