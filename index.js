import Express from "express";
import usersRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import journalRoute from "./routes/journal.js"
import publicRoute from './routes/public.js';
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = Express();
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Credentials',true)
  next()
})
app.use(Express.json());
app.use(cors(
  { origin: 'http://localhost:5173',
  credentials: true,}
))
app.use(cookieParser())
app.use("/server/users", usersRoute);
app.use("/server/auth", authRoute);
app.use("/server/journal", journalRoute);
app.use('/server/public', publicRoute); 
app.listen(3001, () => {
  console.log("Server is Working!");
});
