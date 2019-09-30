module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub', // 静态资源变成字符串
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/'], // 忽略 node_modules
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1' // 别名映射
  },
  snapshotSerializers: ['jest-serializer-vue'], // snapshot格式化
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)' // /tests/unit下 spec 文件, 与 __tests__文件夹下
  ],
  testURL: 'http://localhost/', // 模拟url
  watchPlugins: [
    // 自动联想文件的插件
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
