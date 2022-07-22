import Navbar from './components/Navbar.jsx'
import '../src/css/App.css'
import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  return (
    <div className="App">
          <Navbar/>
          <AppRoutes/>
          <Footer/>
    </div>
  );
}

export default App;
