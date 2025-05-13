import { Temporal, Intl as TemporalIntl } from '@js-temporal/polyfill';

export const getTimePassedSince = (date: string) => {
    const now = Temporal.Now.plainDateISO();
    const initialDate = Temporal.PlainDate.from(date);

    const diff = initialDate.until(now, { largestUnit: 'year' });

    return diff;
}

export const getNow = () => Temporal.Now.plainDateISO();

export const mapMonthNumberToName = (month: number) => {
    return TemporalIntl
        .DateTimeFormat('en', { month: 'long' })
        .format(Temporal.PlainDate.from({ month }));
}

export function getAllMonths(options: Options = {}): Month[] {
    const { locale = navigator.language, format = 'long' } = options;

    const applyFormat = new Intl.DateTimeFormat(locale, { month: format }).format;
    const currentYear = Temporal.Now.plainDateISO().year;

    const months: Month[] = [...Array(12).keys()].map((monthNumber) => {
        const monthName = applyFormat(new Date(currentYear, monthNumber));
        return { number: monthNumber + 1, name: monthName };
    });

    return months;
}

type Options = {
    locale?: string;
    format?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined;
};

type Month = {
    number: number;
    name: string;
};
