
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from './Components/Layouts/Main'
import Header from './Components/Header/Header';
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
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path: '/blogs',
          element:<Blogs></Blogs>
        },
        {
          path: '/statictis',
          element:<Statictis></Statictis>
        },
        {
          path: '/questions',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz/1'),
      
          element:<Questions></Questions>
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
   

  ]);


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
