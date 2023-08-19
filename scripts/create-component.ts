const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let directories = []

rl.question('What is the name of the component? ', (componentName) => {
  fs.readdir('src/components', { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log(err)
      rl.close()
      return
    }

    directories = files.filter((file) => file.isDirectory()).map((file) => file.name)

    directories.push('Create New Directory')

    rl.question(
      `Select the parent component directory? \n${directories
        .map((dir, index) => `${index + 1} - ${dir}`)
        .join('\n')}\n`,
      (type) => {
        const selectedIndex = parseInt(type) - 1

        if (selectedIndex === directories.length - 1) {
          rl.question('Enter the name of the new directory: ', (newDirectoryName) => {
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
            fs.writeFileSync(`${componentPath}/${componentName}.model.ts`, '')
            fs.writeFileSync(
              `${componentPath}/${componentName}.story.vue`,
              `<script setup lang="ts">\nimport '@/index.css';\n</script>`
            )

            fs.appendFileSync(
              `${componentPath}/index.ts`,
              `export { default as ${componentName} } from './${componentName}.vue';\n`
            )

            fs.appendFileSync(
              'src/index.ts',
              `export { ${componentName} } from './${componentPath}';\n`
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

function createComponentInDirectory(directory, componentName) {
  const componentPath = `src/components/${directory}/${componentName}`

  fs.mkdirSync(componentPath, { recursive: true })

  fs.writeFileSync(`${componentPath}/${componentName}.vue`, '')
  fs.writeFileSync(
    `${componentPath}/${componentName}.story.vue`,
    `<script setup lang="ts">\nimport '@/index.css';\n</script>`
  )
  fs.writeFileSync(`${componentPath}/${componentName}.spec.ts`, '')
  fs.writeFileSync(`${componentPath}/${componentName}.model.ts`, '')

  fs.appendFileSync(
    `${componentPath}/index.ts`,
    `export { default as ${componentName} } from './${componentName}.vue';\n`
  )

  fs.appendFileSync('src/index.ts', `export { ${componentName} } from '${componentPath}';\n`)

  console.log(`Component ${componentName} created in ${directory}`)
  rl.close()
}
