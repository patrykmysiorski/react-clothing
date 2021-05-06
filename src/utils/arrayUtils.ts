export const flatArray = <T>(array: T[][]): T[] =>
    array.reduce((a, b) => a.concat(b), []);