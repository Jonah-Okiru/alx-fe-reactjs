
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './components/Search';
import { fetchUserData } from './services/githubService';
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
