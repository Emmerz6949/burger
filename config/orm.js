// Import MySQL connection.
const connection = require("./connection.js");

const orm = {
    selectAll: function(table, cb) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, col, val, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, col, val, id, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, col, val, id], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

// Export the orm object for the model
module.exports = orm;
