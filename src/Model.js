import fs from 'fs'
import path from 'path'
import parse from 'csv-parse'

class Model {
    constructor() {
        this.map = null
        this.gameOver = false
        this.currentRoom = [0,0]
    }

    // TODO: Convert csv input to MapTile classes on load
    loadMap(mapFile) {
        return new Promise((resolve, reject) => {
            fs.readFile(`${path.basename(__dirname)}/maps/${mapFile}.csv`, 'utf8', (err, data) => {
                if (err) reject(data)
    
                parse(data, {columns: false, trim: true}, (err, data) => {
                    if (err) reject(data)

                    this.map = data
                    resolve(data)
                })
            })
        })
    }

    roomExists(coords) {
        return this.getRoom(coords).length ? true : false
    }

    getRoom(coords) {
        const [x, y] = coords
        return this.map[x][y]
    }

    getCurrentRoom() {
        return this.getRoom(this.currentRoom)
    }
}

export default Model