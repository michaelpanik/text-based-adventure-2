import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }

    // TODO: parse input to get action and arguments. Maybe write a lexical parser?
    // parseInput(input) {
    //     input = input.split(' ')

    //     switch (input[0]) {
    //         case 'go':
                
    //             break;
        
    //         default:
    //             break;
    //     }
    // }

    gameLoop() {
        if (this.model.gameOver) {
            rl.close()
            return
        }

        const room = this.model.getCurrentRoom()

        // TODO: This should be view layer?
        rl.question(room, answer => {
            // this.parseInput(answer)

            if (answer == 'stop') {
                this.model.gameOver = true
                this.gameLoop()
            } else {
                this.gameLoop()
            }
        })
    }
}

export default Controller