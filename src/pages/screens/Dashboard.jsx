import React, { useState } from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import Toolbar from '@mui/material/Toolbar';

// Import content pages
import DashboardPage from '../segments/DashboardPage';
import OrdersPage from '../segments/OrdersPage';
import ReportsPage from '../segments/ReportsPage';
import IntegrationsPage from '../segments/IntegrationPage';

const drawerWidth = 240;
const drawerWidthCollapsed = 72;

const NAVIGATION = [
  { kind: 'header', title: 'Main items' },
  { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
  { segment: 'orders', title: 'Orders', icon: <ShoppingCartIcon /> },
  { kind: 'header', title: 'Analytics' },
  { segment: 'reports', title: 'Reports', icon: <BarChartIcon /> },
  { segment: 'integrations', title: 'Integrations', icon: <LayersIcon /> },
];

const demoTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
}));

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState('dashboard'); // Track selected segment

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  // Function to change content based on selected segment
  const getContent = () => {
    switch (selectedSegment) {
      case 'dashboard':
        return <DashboardPage />;
      case 'orders':
        return <OrdersPage />;
      case 'reports':
        return <ReportsPage />;
      case 'integrations':
        return <IntegrationsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <ThemeProvider theme={demoTheme}>
      <CssBaseline />
      <Box sx={{ display: 'relative' }}>
        {/* Sidebar */}
        <Sidebar
          open={isSidebarOpen}
          navigation={NAVIGATION}
          onSelectSegment={(segment) => setSelectedSegment(segment)} // Update selected segment
        />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            p: 3,
            ml: isSidebarOpen ? `${drawerWidth}px` : `${drawerWidthCollapsed}px`,
            transition: 'margin-left 0.3s',
          }}
        >
          <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          <Toolbar />

          {/* Render content based on selected segment */}
          {getContent()}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
