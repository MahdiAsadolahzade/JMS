import React from "react";
import { useUserStore } from "../userStore";

const Login: React.FC = () => {
  const { signIn } = useUserStore();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default Login;
