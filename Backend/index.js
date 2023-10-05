import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";

dotenv.config();
const app = express();
const PORT = 5001 || process.env.PORT;
app.use(cors());

app.use("/fictitious-banking-app", graphqlHTTP({ schema: {}, graphiql: true }));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
