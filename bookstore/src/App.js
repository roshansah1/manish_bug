import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom';
import Books from "./components/Book/Books"
import BuyBook from "./components/Book/BuyBook"
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/books" element={<Books />} exact />
          <Route path="/buy" element={<BuyBook />} exact />
        </Routes>
      </main>
    </>
  )
}

export default App;
