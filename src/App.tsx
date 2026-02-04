import { Outlet } from "react-router";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default App;
