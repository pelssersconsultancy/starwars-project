module.exports = {
  name: 'starwars-mobile',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/starwars-mobile',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
