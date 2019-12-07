module.exports = {
  name: 'starwars-planets-data-access-entities',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/starwars/planets/data-access-entities',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
