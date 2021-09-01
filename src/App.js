import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import MealsList from './pages/MealsList';
import MainHeader from './components/MainHeader';
import MealDetail from './pages/MealDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Route path='/' exact>
          <MealsList />
        </Route>
        <Route path='/meal-detail/:mealId'>
          <MealDetail />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
