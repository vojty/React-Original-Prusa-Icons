const fs = require('fs')
const lineByLine = require('n-readlines')

const folders = ['icons' , 'favicons', 'logos', 'spinners', 'misc']

for (let folder in folders) {
    let content = JSON.parse(fs.readFileSync(`./src/lib/${folders[folder]}.json`, 'utf8'))


    content.files.filter(component => !!component.file).forEach(component => {
        const liner = new lineByLine(`./src/lib/${folders[folder]}/${component.file}`)

        let line

        while (line = liner.next()) {
            
            if (line.toString('utf8').trimStart().startsWith('name:')) {
                const nameJSON = JSON.parse(
                    `{
                        ${line.toString('utf8')
                        .replace(`name`, `"name"`)
                        .replace(/'/g, `"`)
                        .replace(`,`, ``)}
                    }`
                )

                content.files.forEach(item => {
                    if (item.file === component.file) item.name = nameJSON.name
                })
            }

            if (line.toString('utf8').trimStart().startsWith('description:')) {
                const descriptionJSON = JSON.parse(
                    `{
                        ${line.toString('utf8')
                        .replace(`description`, `"description"`)
                        .replace(/'/g, `"`)
                        .replace(`,`, ``)}
                    }`
                )

                content.files.forEach(item => {
                    if (item.file === component.file) item.description = descriptionJSON.description
                })
            }

            if (line.toString('utf8').trimStart().startsWith('tags:')) {
                const tagsJSON = JSON.parse(
                    `{
                        ${line.toString('utf8')
                        .replace(`tags`, `"tags"`)
                        .replace(`],`, `]`)
                        .replace(/Tag./g, `"`)
                        .replace(/,/g, `",`)
                        .replace(`]`, `"]`)}
                    }`
                )

                content.files.forEach(item => {
                    if (item.file === component.file) item.tags = tagsJSON.tags
                })
            }
            
        }
    })

    fs.writeFileSync(`./src/lib/${folders[folder]}.json`, JSON.stringify(content, null, 2))
}

