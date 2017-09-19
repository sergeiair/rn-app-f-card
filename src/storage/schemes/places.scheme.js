
export const placesScheme = {
  name: 'places',
  primaryKey: 'id',
  properties: {
    id: { type: 'int' },
	  type: { type: 'string', optional: true },
    name: { type: 'string' },
	  latLng: { type: 'string' },
  }
};
