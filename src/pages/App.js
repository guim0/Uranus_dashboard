import { Header } from "../Components/Header";
import { Cards } from "../Components/Cards";

import '../index.scss';


function App() {
  return (
      <div className="container">
      <Header/>
      <section>
      <Cards/>
      </section>

      </div>
  );
}

export default App;
