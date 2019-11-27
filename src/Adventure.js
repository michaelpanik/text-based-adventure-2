import Controller from "./Controller"
import Model from "./Model"
import View from "./View"

class Adventure {
    constructor() {
        this.model = new Model()
        this.view = new View(this.model)
        this.controller = new Controller(this.model, this.view)
    }

    init() {
        this.model.loadMap('map')
            .then(e => {
                this.controller.gameLoop()
            })
    }
}

export default Adventure