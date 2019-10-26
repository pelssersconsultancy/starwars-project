module.exports = {
  name: 'starwars-layout',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/starwars/layout',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
