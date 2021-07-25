#!/usr/bin/env node

const lib = require('ljj-cli-lib')

console.log(lib.sum(2, 2))

// 注册一个命令 ljj init

const argv = require('process').argv

const command = argv[2]
console.log(argv)

// ljj init --name vue-test
// [ '/usr/local/bin/node', '/usr/local/bin/ljj', 'init', '--name', 'vue-test' ]
if (command === "--version" || command === "-V" ) {
  console.log("1.0.0")
  return
}
let [option, param] = argv.splice(3)
option = option.replace('--', '')

if (command) {
  if (lib[command]) {
    lib[command]({ option, param })
  }
  else {
    console.log(`参数${command}无效`)
  }
}
else {
  console.log('请输入命令')
}

// 实现参数解析 --version 和 init --name



