import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import ButtonPage from './component/ButtonPage';
import Novel from './component/Novel/Novel';
import AGoldenAge from './component/Novel/AGoldenAge';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
          path:'/button',
          element: <ButtonPage></ButtonPage>
      },
      {
          path:'/novel',
          element: <Novel></Novel>
      },
      {
          path:'/golden',
          element: <AGoldenAge></AGoldenAge>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
