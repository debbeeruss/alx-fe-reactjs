import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
function App() {
  return (
    <Router>
      <div className="max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={
            <>
            <SearchBar />
              <AddRecipeForm />
              <RecipeList />
              <FavoritesList />
  <RecommendationsList />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
