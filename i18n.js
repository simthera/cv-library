import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config 
export default getRequestConfig(async ({locale}) => ({
  // Validate that the incoming `locale` parameter is valid 
    messages: (await import(`./messages/${locale}.json`)).default,
}));