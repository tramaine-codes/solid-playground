export default {
  '*.{js,json,jsx,ts,tsx,md}': 'biome format --write --no-errors-on-unmatched',
  '*.{js,jsx,ts,tsx}': 'biome lint --apply --no-errors-on-unmatched',
};
