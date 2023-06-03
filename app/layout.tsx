"use client";
import { GlobalStyle } from "./global-styled";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { ToastContext } from "./context/ToastContext";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "./context/AuthContext";

export const metadata = {
  title: "Message",
  description: "Um aplicativo de mensagem feito com o next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <>
          <ThemeProvider theme={theme}>
            <AuthContext>
              <GlobalStyle />
              <ToastContext />
              {children}
            </AuthContext>
          </ThemeProvider>
        </>
      </body>
    </html>
  );
}
