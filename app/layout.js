'use client'
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./globals.css";
import Bundle from "./bundle";
import Navbar from "./(components)/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/authContext";
import { Provider } from "react-redux";
import { store } from "./Redux/store";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <AuthContextProvider>
          <Provider store={store}>
     
        <Navbar/>
        {children}

        <Toaster />

        </Provider>
        </AuthContextProvider>
        <Bundle/>
      </body>
    </html>
  );
}
