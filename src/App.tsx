import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './common/components/Layout'
import Home from './pages/Home'
import OrderByPhoto from './pages/OrderByPhoto'
import Portal from './pages/Portal'
import SinglePortal from './pages/SinglePortal'
import PageNotFound from './pages/PageNotFound'
import ShippingAndPayment from './pages/ShippingAndPayment'
import Shops from './pages/Shops'
import Contacts from './pages/Contacts'
import AboutUs from './pages/AboutUs'
import Promotions from './pages/Promotions'
import Bouquets from './pages/Bouquets'
import SingleBouquet from './pages/SingleBouquet'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Registration from './pages/Registration'
import MyProfile from './pages/MyProfile'
import Order from './pages/Order'
import SelectedFlowers from './pages/Search'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <OrderByPhoto />,
        path: 'order_by_photo',
      },
      {
        element: <Portal />,
        path: 'portal',
      },
      {
        element: <SinglePortal />,
        path: 'portal/:portalId',
      },
      {
        element: <ShippingAndPayment />,
        path: 'shipping_and_payment',
      },
      {
        element: <Shops />,
        path: 'shops',
      },
      {
        element: <Contacts />,
        path: 'contacts',
      },
      {
        element: <AboutUs />,
        path: 'about_us',
      },
      {
        element: <Promotions />,
        path: 'promotions',
      },
      {
        element: <Bouquets />,
        path: 'bouquets',
      },
      {
        element: <SingleBouquet />,
        path: 'bouquets/:bouquetsId',
      },
      {
        element: <Cart />,
        path: 'cart',
      },
      {
        element: <Login />,
        path: '/login',
      },
      {
        element: <Registration />,
        path: '/registration',
      },
      {
        element: <MyProfile />,
        path: 'my_profile',
      },
      {
        element: <Order />,
        path: 'order',
      },
      {
        element: <SelectedFlowers />,
        path: 'selected_flowers',
      },
    ],
  },
])

export const App = () => <RouterProvider router={router} />
