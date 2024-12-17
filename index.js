import { app } from "./app.js";

const SERVER_PORT = 3000;

app.listen(SERVER_PORT, async () => {
  try {
    console.log(`server is connected at port ${SERVER_PORT}`);
  } catch (error) {
    console.log("Something went wrong ", error);
  }
});
