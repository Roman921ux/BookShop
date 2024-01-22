import { Provider } from 'react-redux'
import App from './App.jsx'
// router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Basket from './components/Basket.jsx';
import Home from './pages/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);


export const Root = ({ store }) => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)