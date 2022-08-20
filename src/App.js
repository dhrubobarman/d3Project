import React from 'react';
import './App.css';


import { Header } from './Header'
import { Box } from '@mui/material'

import { routes } from './Helpers/routes';
import { Home } from './Pages/Home';
import { DataFetch } from './Pages/DataFetch';
import { FollowCursor } from './Pages/FollowCursor';
import { VisualisingData } from './Pages/VisualisingData';
import { BarChart } from './Pages/BarChart';
import { ScatterPloat } from './Pages/ScatterPloat';
import { LineChart } from './Pages/LineChart';
import { WorldMap } from './Pages/WorldMap';



import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";





function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Box sx={{ marginTop: '30px' }}>
          <Routes>
            <Route path={routes.home.path} element={<Home />} />
            <Route path={routes.dataFetch.path} element={<DataFetch />} />
            <Route path={routes.FollowCursor.path} element={<FollowCursor />} />
            <Route path={routes.visualisingData.path} element={<VisualisingData />} />
            <Route path={routes.barChart.path} element={<BarChart />} />
            <Route path={routes.ScatterPlot.path} element={<ScatterPloat />} />
            <Route path={routes.LineChart.path} element={<LineChart />} />
            <Route path={routes.WorldMap.path} element={<WorldMap />} />
          </Routes>
        </Box>
      </Router>

    </div >
  );
}

export default App;


