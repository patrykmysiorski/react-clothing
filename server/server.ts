import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { collectionsMock } from "./mocks/collectionsMocks";
import { GET_COLLECTIONS } from "../src/constants/endpoints";

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(GET_COLLECTIONS, (req: Request, res: Response) => {
  setTimeout(() => res.send(collectionsMock), 1000);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
