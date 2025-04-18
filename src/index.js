import express from "express";
import router from "./routes.js";

const app = express();
app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server has been started at ${PORT}`));
