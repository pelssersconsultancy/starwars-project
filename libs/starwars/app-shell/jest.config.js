module.exports = {
  name: 'starwars-app-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/starwars/app-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
