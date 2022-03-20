import Home from "./routes/home/Home";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/Navigation";
import Signin from "./routes/signin/Signin";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='signin' element={<Signin />} />
      </Route>
    </Routes>
  );
}

export default App;
