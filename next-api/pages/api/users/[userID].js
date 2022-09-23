import { users } from "../../../data/users";

const handler = (req, res) => {
  if (req.method === "DELETE") {
    const { userID } = req.query;
    const index = users.findIndex(
      (ele) => Number(ele.id) === Number(JSON.parse(userID))
    );
    const removedUser = users.splice(index, 1);
    res.status(200).json(removedUser);
  }
};

export default handler;
