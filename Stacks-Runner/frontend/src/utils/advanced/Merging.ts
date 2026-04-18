/**
 * Merging utility module
 * @module utils/Merging
 */

export type Fn<I, O> = (input: I) => O;
export type AsyncFn<I, O> = (input: I) => Promise<O>;

export function createMergingPipeline<T>(...fns: Fn<T, T>[]): Fn<T, T> {
  return (input: T) => fns.reduce((v, fn) => fn(v), input);
}

export async function createMergingAsyncPipeline<T>(...fns: AsyncFn<T, T>[]): AsyncFn<T, T> {
  return async (input: T) => {
    let v = input;
    for (const fn of fns) v = await fn(v);
    return v;
  };
}

export function mergingCache<K, V>(maxSize = 256): { get(k: K): V | undefined; set(k: K, v: V): void; clear(): void } {
  const map = new Map<K, V>();
  return {
    get(k) { return map.get(k); },
    set(k, v) { if (map.size >= maxSize) map.delete(map.keys().next().value!); map.set(k, v); },
    clear() { map.clear(); },
  };
}
