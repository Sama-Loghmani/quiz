const express = require("express");
const app = express();

const port = 8000;

app.get("/multiply", (req, res) => {
    const { val1, val2 } = req.query;

    res.send(
        `<h3>First Value is: <span>${val1}</span></h3><br>
          <h3>Second Value is: <span>${val2}</span></h3><br>
          <h3>Multiply is: <span>${val1 * val2}</span></h3>
          `
    );
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
