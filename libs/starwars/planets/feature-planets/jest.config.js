module.exports = {
  name: 'starwars-planets-feature-planets',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/starwars/planets/feature-planets',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
