const fs = require('fs');

const printInvoice = (req, res) => {
    fs.writeFile(`modules/invoice/invoice.json`, JSON.stringify(req.body), (err) => {
        if (err) throw err;
    });

    // add qz functions from qz.js here

    fs.readFile(`modules/invoice/invoice.json`, (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
}

module.exports = {
    printInvoice
}