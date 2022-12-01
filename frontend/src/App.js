import MainPage from './screens/MainPage';
import Login from './screens/Login'

function App() {
  const auth = true
  return (
    <div className="App">
      {auth && <MainPage />}
      {auth === false && <Login />}
    </div>
  );
}

export default App;
