import './App.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from './Components/Layouts/Main'
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Statictis from './Components/Statictis/Statictis';
import Questions from './Components/Questions/Questions';



function App() {



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/statictis',
          loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statictis></Statictis>
        },

       
        
        {
          path: "/questions/:questionsID",
          loader: async ({ params }) => {
            const url = `https://openapi.programming-hero.com/api/quiz/${params.questionsID}`;
            const res = await fetch(url)
            const data = await res.json()
            return data
          },
          element: <Questions></Questions>

        }





      ]
    },
     {
      path:"*",
      element:<div><h1>404 Not Found</h1></div>
     }

  ]);


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
