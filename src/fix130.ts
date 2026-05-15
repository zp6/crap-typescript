// Fix for Issue #130 - TypeScript utility improvements
export type NonNullableFields<T> = { [P in keyof T]: NonNullable<T[P]> };

export function assertNonNull<T>(value: T | null | undefined, message?: string): T {
  if (value == null) throw new Error(message ?? "Expected non-null value");
  return value;
}

export function safeJsonParse<T>(input: string, fallback: T): T {
  try { return JSON.parse(input) as T; }
  catch { return fallback; }
}

export function groupBy<T, K extends string | number>(items: T[], keyFn: (item: T) => K): Map<K, T[]> {
  const map = new Map<K, T[]>();
  for (const item of items) {
    const key = keyFn(item);
    const group = map.get(key) ?? [];
    group.push(item);
    map.set(key, group);
  }
  return map;
}
