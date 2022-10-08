import { CssBaseline } from "@mui/material";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { Playground } from "./Playground";

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Playground />
      </main>
      <Footer />
    </div>
  );
}

export default App;
