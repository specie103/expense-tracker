import AddTransaction from "./component/AddTransaction";
import Balance from "./component/Balance";
import Header from "./component/Header";
import IncomeExpensis from "./component/IncomeExpensis";
import TransactionList from "./component/TransactionList";

function App() {
    return (
      <div className="container wrapper mx-auto bg-light text-dark px-3 py-2">
          <Header/>
          <Balance />
          <IncomeExpensis />
          <TransactionList />
          <AddTransaction />
      </div>
    );
}

export default App;
