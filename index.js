import Express from "express";
import usersRoute from "./routes/users.js";
import likesRoute from "./routes/likes.js";
import commentsRoute from "./routes/comments.js";
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = Express();
app.use(Express.json());
app.use(cors())
app.use(cookieParser())


app.use("/server/users", usersRoute);
app.use("/server/likes", likesRoute);
app.use("/server/comments", commentsRoute);
app.use("/server/auth", authRoute);

app.listen(3001, () => {
  console.log("Server is Working!");
});
