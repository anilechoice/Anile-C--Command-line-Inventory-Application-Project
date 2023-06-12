const { readJSONFile, writeJSONFile } = require("./src/helpers");
const {
    create,
    index,
    destroy,
    update,
    score
} = require("./src/donut-shop")


const run = () => {
    const action = process.argv[2];
    const donut = process.argv[3];
    let donuts = readJSONFile("./data", "donuts-ordered.json")
    let writeToFile = false;
    let updatedDonuts = [];
    const chalk = require('chalk');

    switch (action) {
        case "index":
            const allDonuts = index(donuts)
            console.log(allDonuts);
            break;
        case "create":
            console.log("create is firing")
            updatedDonuts = create(donuts, donut)
            writeToFile = true;
            break;
        case "update":
            console.log(donut, " %%%%%% ")
            updatedDonuts = update(donuts, donut, process.argv[4]);
            writeToFile = true;
            break;
        case "destroy":
            updatedDonuts = destroy(donuts, donut);
            writeToFile = true;
            break;
        case "score":
            console.log(score(donuts))
            break;
        default:
            console.log(chalk.red("There was an error."));
    }
if (writeToFile) {
    console.log("New data detected - updating.")
    writeJSONFile("./data", "donuts-ordered.json", updatedDonuts)
    }
}

run()