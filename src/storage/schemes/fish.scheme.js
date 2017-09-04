
export const fishScheme = {
  name: 'fishes',
  primaryKey: 'id',
  properties: {
    id: { type: 'int' },
    fishId: { type: 'string' },
    name: { type: 'string' },
    family: { type: 'string' },
    protectedSize: { type: 'int'},
    protectedPeriod: { type: 'string'},
    protectedLimit: { type: 'int'},
    lang: { type: 'string' },
    description: { type: 'string', optional: true },
  }
};
