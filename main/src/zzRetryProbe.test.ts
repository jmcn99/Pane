// PROBE (C4, throwaway): fails on its first attempt only.
import { it, expect } from 'vitest';
let attempts = 0;
it('retry probe: fails only on its first attempt', () => {
  attempts += 1;
  expect(attempts).toBeGreaterThan(1);
});
