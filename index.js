import Express from "express";
import usersRoute from "./routes/users.js";
import likesRoute from "./routes/likes.js";
import commentsRoute from "./routes/comments.js";
import authRoute from "./routes/auth.js";
import journalRoute from "./routes/journal.js"
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = Express();

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Credentials',true)
  next()
})


app.use(Express.json());
app.use(cors(
  { origin: 'http://localhost:5173', // یا هر آدرس دامنه‌ای که فرانت‌اند اجرا می‌شود
  credentials: true,}
))
app.use(cookieParser())


app.use("/server/users", usersRoute);
app.use("/server/likes", likesRoute);
app.use("/server/comments", commentsRoute);
app.use("/server/auth", authRoute);
app.use("/server/journal", journalRoute);
app.listen(3001, () => {
  console.log("Server is Working!");
});
