import { extractHeaders } from './headers-utils';
import {
  type FetchFunction,
  removeUndefinedEntries,
} from '@ai-toolkit/provider-utils';

/**
 * Test helper to inject custom headers into a fetch request.
 * @param customHeaders - The headers to inject.
 * @returns A fetch function that injects the custom headers.
 */
export function injectFetchHeaders(
  customHeaders: Record<string, string>,
): FetchFunction {
  return async (input, init = {}) =>
    await globalThis.fetch(input, {
      ...init,
      headers: removeUndefinedEntries({
        ...extractHeaders(init.headers),
        ...customHeaders,
      }),
    });
}
