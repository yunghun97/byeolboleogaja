import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import Vite from '@/pages/Vite';
import NotFound from '@/pages/Page404';
import WorldMap from '@/pages/WorldMap';
import World from '@/pages/World';
import Museum from '@/pages/Museum';
import Observatory from '@/pages/Observatory';
import Horoscope from '@/pages/Horoscope';
import SpaceTravelDialog from './components/SpaceTravelDialog';

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<MainPage />} />
      <Route path="/spaceship" element={<SpaceTravelDialog />} />
      <Route path="/vite" element={<Vite />} />
      <Route path="/worldmap" element={<WorldMap />} />
      <Route path="/world" element={<World />} />
      <Route path="/museum" element={<Museum />} />
      <Route path="/observatory" element={<Observatory />} />
      <Route path="/horoscope" element={<Horoscope />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </ReactRouterRoutes>
  );
}
