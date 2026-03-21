import { uniqueKey } from './strings';

type ClassName = string | number | boolean;
export function getClassName(...classes: (ClassName | undefined)[]) {
    const classSet = new Set<string>();

    const addValidClass = (s: string) => {
        if (s !== '')
            classSet.add(s);
    };

    for (const c of classes) {
        if (c !== undefined && c !== null && typeof c !== 'boolean') {
            const spl = c.toString().split(' ');
            for (const s of spl)
                addValidClass(s);
        }
    }

    if (classSet.size === 0)
        return undefined;

    return Array.from(classSet).join(' ');
}

export function getId(prefix: string, id?: string) {
    return id ?? uniqueKey(prefix);
}

export function getParts<T>(parts?: T): T {
    return parts ?? {} as T;
}