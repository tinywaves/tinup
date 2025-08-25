import { parseArgs } from 'node:util';

export const getMode = () => {
  const { values } = parseArgs({
    options: { mode: { type: 'string' } },
  });

  return values.mode;
};
