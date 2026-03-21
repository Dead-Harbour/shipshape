/* eslint-disable no-magic-numbers */
export interface PrettyOptions {
    capitalize?: 'none' | 'first' | 'all'
    splitOn?: string | RegExp
    join?: string
}

export function capitalize(str: string) {
    if (str === '')
        return '';

    return (str[0] || '').toUpperCase() + str.slice(1);
}

export function prettyString(str: string, options?: PrettyOptions) {
    if (str === '')
        return '';

    const splitOn = options?.splitOn || /[-_\s]/g;
    const join = options?.join ?? ' ';
    const spl = str.split(splitOn);

    switch (options?.capitalize) {
        case 'all': return spl.map(capitalize).join(join);
        case 'first': return [capitalize(spl[0] || ''), ...spl.slice(1)].join(join);
        default: return spl.join(join);
    }
}

const UUID_TEMPLATE = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
export function uniqueId() {
    return UUID_TEMPLATE.replaceAll(/[xy]/g, c => {
        const r = Math.trunc(Math.random() * 16);
        const v = c === 'x' ? r : (r & 0x3 | 0x8);

        return v.toString(16);
    });
}

export function uniqueKey(prefix?: string) {
    return (prefix || '') + uniqueId();
}