import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
export default getRequestConfig(async ({ requestLocale }) => {
    // Static for now, we'll change this later
    const requested = await requestLocale;

    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    return {
        locale,
        messages: (await import(`@/dictionaries/${locale}.json`)).default
    };
});

export const formats = {
    dateTime: {
        short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        },
        long: {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }
    },
    number: {
        currency: {
            style: 'currency',
            currency: 'USD'
        },
        percent: {
            style: 'percent'
        }
    }
};