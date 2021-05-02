import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { jacketsMock } from "./mocks/jackets";

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", (req: Request, res: Response) => {
  res.send(jacketsMock);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
