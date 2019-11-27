class View {
    constructor(model) {
        this.model = model
    }

    showRoom(x,y) {
        const mapTile = this.model.map[x][y]
        console.log(mapTile)
    }
}

export default View