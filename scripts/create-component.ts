const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let directories: any[] = []

rl.question('What is the name of the component? ', (componentName: any) => {
  fs.readdir('src/components', { withFileTypes: true }, (err: any, files: any[]) => {
    if (err) {
      console.log(err)
      rl.close()
      return
    }

    directories = files
      .filter((file: { isDirectory: () => any }) => file.isDirectory())
      .map((file: { name: any }) => file.name)

    directories.push('Create New Directory')

    rl.question(
      `Select the parent component directory? \n${directories
        .map((dir, index) => `${index + 1} - ${dir}`)
        .join('\n')}\n`,
      (type: string) => {
        const selectedIndex = parseInt(type) - 1

        if (selectedIndex === directories.length - 1) {
          rl.question('Enter the name of the new directory: ', (newDirectoryName: any) => {
            const newDirectoryPath = `src/components/${newDirectoryName}`
            fs.mkdirSync(newDirectoryPath, { recursive: true })
            createComponentInDirectory(newDirectoryName, componentName)
          })
        } else if (selectedIndex >= 0 && selectedIndex < directories.length) {
          const selectedDirectory = directories[selectedIndex]
          const componentPath = `src/components/${selectedDirectory}/${componentName}`

          if (fs.existsSync(componentPath)) {
            console.log(`Component ${componentName} already exists in ${selectedDirectory}`)
            rl.close()
          } else {
            fs.mkdirSync(componentPath, { recursive: true })

            fs.writeFileSync(`${componentPath}/${componentName}.vue`, '')
            fs.writeFileSync(`${componentPath}/${componentName}.spec.ts`, '')
            fs.writeFileSync(
              `${componentPath}/${componentName}.model.ts`,
              `/*
            Avaible colors:

                  basic:
                    black: '#1B1B1E',
                    darkgrey: '#787878',
                    grey: '#CDCDCD',
                    lightgrey: '#ECECEC',
                    verylightgrey: '#F6F6F6',
                    white: '#FAFAFA'
                  primary:
                    DEFAULT: '#000000',
                    light: '#00F2A5',
                    charcoal: '#373F51',
                    moonstone: '#58A4B0',
                    powder: '#A9BCD0',
                    platinum: '#D8DBE2'
                  transparent: 'transparent',
                  current: 'currentColor',
                  inherit: 'inherit',
                  error: '#FF5656',
                  warning: '#FFC85C',
                  success: '#7BC079',
                  info: '#333333'
            */`
            )
            fs.writeFileSync(
              `${componentPath}/${componentName}.story.vue`,
              `<template></template>\n
              <script setup lang="ts"></script>`
            )

            fs.appendFileSync(
              `${componentPath}/index.ts`,
              `export { default } from './${componentName}.vue';\n`
            )

            fs.appendFileSync(
              'src/index.ts',
              `export { default as  ${componentName} } from './components/${selectedDirectory}/${componentName}';\n`
            )

            console.log(`Component ${componentName} created in ${selectedDirectory}`)
            rl.close()
          }
        } else {
          console.log('Invalid selection')
          rl.close()
        }
      }
    )
  })
})

function createComponentInDirectory(directory: any, componentName: any) {
  const componentPath = `src/components/${directory}/${componentName}`

  fs.mkdirSync(componentPath, { recursive: true })

  fs.writeFileSync(`${componentPath}/${componentName}.vue`, '')
  fs.writeFileSync(
    `${componentPath}/${componentName}.story.vue`,
    `<template></template>\n
    <script setup lang="ts"></script>`
  )
  fs.writeFileSync(`${componentPath}/${componentName}.spec.ts`, '')
  fs.writeFileSync(`${componentPath}/${componentName}.model.ts`, '')

  fs.appendFileSync(
    `${componentPath}/index.ts`,
    `export { default } from './${componentName}.vue';\n`
  )

  fs.appendFileSync(
    'src/index.ts',
    `export { default as  ${componentName} } from './components/${directory}/${componentName}';\n`
  )

  console.log(`Component ${componentName} created in ${directory}`)
  rl.close()
}
