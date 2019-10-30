module.exports = {
  name: 'starwars-shared-state-planets',
  preset: '../../../../../jest.config.js',
  coverageDirectory:
    '../../../../../coverage/libs/starwars/shared/state/planets',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
