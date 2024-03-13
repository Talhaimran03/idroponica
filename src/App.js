
import './App.css';
import Titolo from './components/titolo/titolo.js'; 
import Testo from'./components/testo/Testo';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import HomePage from './pages/Home';
import SecondPage from './pages/SecondPage';

function App() {
  const titolo = "Cos'è l'idroponica";
  const testo = "Per coltivazione idroponica (dal greco antico ὕδωρ hýdor, acqua + πόνος pónos, lavoro) o idrocoltura s'intende una delle tecniche di coltivazione fuori suolo: la terra è sostituita da un substrato inerte (argilla espansa, perlite, vermiculite, fibra di cocco, lana di roccia, zeolite, ecc.). La pianta viene irrigata con una soluzione nutritiva composta dall'acqua e dai composti (per lo più inorganici) necessari ad apportare tutti gli elementi indispensabili alla normale nutrizione minerale. La coltura idroponica consente produzioni controllate sia dal punto di vista qualitativo sia da quello igienico-sanitario durante tutto l'anno.";
  const router = createBrowserRouter([
    {path:'/', element:<HomePage/>},
    {path:'/second', element:<SecondPage/>},
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
      {/* <Titolo/>
      <Testo titolo={titolo} testo={testo}/> */}
    </>
  );
}
export default App;
