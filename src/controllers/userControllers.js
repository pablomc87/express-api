const database = require("../../database");

const getUsers = (req, res) => {
  database
    .query("select * from users")
    .then(([users]) => {
      res.json(users);
      res.sendStatus(200);// use res.json instead of console.log
    })
    .catch((err) => {
      console.error(err);
    });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from users where id = ?", [id])
    .then(([users]) => {
      if (users[0] != null) {
        res.json(users[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);

    });
};

module.exports = {
  getUsers,
  getUserById,
  };

afterAll(() => database.end());