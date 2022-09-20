import { users } from "../../data/users";

const handler = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(users);
  } else if (req.method === "POST") {
    const { body } = req;
    users.push(body);
    res.status(200).json(body);
  }
};

export default handler;
