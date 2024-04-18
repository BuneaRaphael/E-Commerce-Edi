import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import ProductList from "./components/productsList/ProductsList";
function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
