const express = require("express");
const router = express.Router();
const invoiceController = require("./modules/invoice/invoice.controller");

router.get("/", (req, res) => {
    res.send("Hello World");
} );

// route group
router.route("/invoice")
    .post(invoiceController.printInvoice);


module.exports = router;