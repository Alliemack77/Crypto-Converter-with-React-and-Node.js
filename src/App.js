import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";
import './styles.scss'

const App = () => {


  return (
    <div className="dashboard">
      <CurrencyConverter />
      <NewsFeed />

    </div>

  );
}

export default App;
