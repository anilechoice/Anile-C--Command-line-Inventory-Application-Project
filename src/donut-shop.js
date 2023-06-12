const chalk = require('chalk');
const { faker } = require('@faker-js/faker');
const donutPrice = require("../data/donut-price.json");


function create (donuts, donutName) {
    const donut = {name: donutName,
        id: faker.string.uuid(),
        price: donutPrice[donutName]
};
donuts.push(donut);
return donuts
}

function index (donuts) {
    return donuts.map((donut) => donut.id + ": " + donut.name).join("\n")
}

function show (donuts, donutId) {
    const foundDonut = donuts.find((donut) => donut.id === donutId);
    return foundDonut.id + ": " + foundDonut.name + " for " + foundDonut.price + " dollars"
}
function destroy (donuts, donutId) {
    const index = donuts.findIndex((donut) => donut.id === donutId);
    if (index > -1) {
        donuts.splice(index, 1);
        console.log(chalk.blue(`${donutId} has been removed from order.`));
        return donuts
    } else {
        console.log(chalk.red("Couldn't find a doughnut with that ID."));
    }
}

function update (donuts, donutId, updatedDonut) {
    const index = animal.findIndex((donut) => donut.id === donutId);
    if (index > -1) {
        donuts[index].id = donutId
        donut[index].name = updatedDonut
        console.log(chalk.blue("Your order has been updated."));
        return donuts
    } else {
        console.log(chalk.red("Couldn't fine a doughnut with that ID."));
    }
}
function score (donuts) {
    const total = donuts.reduce((a,b) => (a + b.price), 0)
    console.log(chalk.green(total))
    return total;
}

module.exports = {
    create,
    index,
    show,
    destroy,
    update,
    score
}