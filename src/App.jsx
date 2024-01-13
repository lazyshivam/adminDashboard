import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


// import Loader from './common/Loader';
import routes from './routes';
import Analysis from './pages/Dashboard/Analysis';
import SignIn from './pages/authentication/Signin';
import SignUp from './pages/authentication/SingUp';
import Loader from './common/Loader';


const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
        
      />
      {/* <SignIn/> */}
      <Routes>
        <Route path="/auth/signin" element={<SignIn/>} />
        <Route path="/auth/signup" element={<SignUp/>} />
        <Route element={<DefaultLayout />}>
          <Route index element={<Analysis/>} />
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
