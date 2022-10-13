import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import QuizDetails from './components/QuizDetails/QuizDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './components/NotFound/NotFound';

function App() {
  const router = createBrowserRouter([
    { path: '/', 
      element: <Main />,
      children: [
        { path: '/', 
          element: <Home />,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz') 
        },
        { path: 'home', 
          element: <Home />,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz') 
        },
        { path: 'statistics', 
          element: <Statistics />,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz') 
        },
        { path: 'blog', element: <Blog /> },
        { path: 'quiz/:quizId',
          element: <QuizDetails />,
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          }
        }
      ]
    },
    { path:'*', element: <NotFound /> }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
