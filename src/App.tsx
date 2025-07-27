import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signin from "./pages/Signin";
import { Provider } from "react-redux";
import { store } from "./store";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<h1>Home Page</h1>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Signin />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
