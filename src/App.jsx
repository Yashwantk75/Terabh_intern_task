import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ContextProvider from "./store/User-credential";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
// import Login from "./components/Login";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <ContextProvider>
//         <Home></Home>
//       </ContextProvider>
//     ),
//   },
//   {
//     path: "/signup",
//     element: <h1>signup</h1>,
//   },
//   {
//     path: "/login",
//     element: (
//       <ContextProvider>
//         <Login></Login>
//       </ContextProvider>
//     ),
//   },
// ]);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ContextProvider>
                <Header></Header>
                <Home></Home>
              </ContextProvider>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <ContextProvider>
                <Login></Login>
              </ContextProvider>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <ContextProvider>
                <Header></Header>
                <Signup></Signup>
              </ContextProvider>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <ContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </ContextProvider> */}
    </>
  );
}

export default App;
