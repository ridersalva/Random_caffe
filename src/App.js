
import '../src/css/App.css'
import AppRoutes from './routes/AppRoutes.jsx'
import Footer from './components/Footer.jsx';
import Navbara from './components/Navbara.jsx';

function App() {
  return (
    <div className="App">
          <Navbara/>
          <AppRoutes/>
          <Footer/>
    </div>
  );
}

export default App;
