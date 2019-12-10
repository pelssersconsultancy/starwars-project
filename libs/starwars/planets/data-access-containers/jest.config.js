module.exports = {
  name: 'starwars-planets-data-access-containers',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/starwars/planets/data-access-containers',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
