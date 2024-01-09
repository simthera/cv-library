import { useLocale } from "next-intl";
import NextIntlProvider from "./NextIntlProvider";
import { notFound } from "next/navigation";
import { Open_Sans } from 'next/font/google'
import StyledComponentsRegistry from '../registry'
import './globals.css'

const open_sans = Open_Sans({subsets: ['latin']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children,params }) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`))
      .default;
  } catch (error) {
    notFound();
  } 
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
      <html lang={locale}>
      <body className={open_sans.className}>
      <NextIntlProvider
          locale={params.locale}
          messages={messages}
          timeZone="Europe/Berlin"
          now={new Date()}
        >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextIntlProvider>
      </body>
    </html>
  )
}
