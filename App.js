import {Outlet} from 'react-router-dom'
import SearchHeader from './componets/SearchHeader'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import {YoutubeApiProvider} from './context/YoutubeApiContext'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
