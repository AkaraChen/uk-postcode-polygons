import fs from 'node:fs/promises'

const data = {
    type: 'FeatureCollection',
    features: []
}

const geojsons = await fs.readdir('./geojson')

for (const geojson of geojsons) {
    const content = await fs.readFile(`./geojson/${geojson}`)
    const json = JSON.parse(content)
    data.features = data.features.concat(json.features)
}

await fs.writeFile('./merged.geojson', JSON.stringify(data))
