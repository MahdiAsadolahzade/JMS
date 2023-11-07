import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-container">
      {children}
    </div>
  );
};

export default AuthLayout;
