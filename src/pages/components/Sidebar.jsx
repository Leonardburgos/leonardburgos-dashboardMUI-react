import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const drawerWidthCollapsed = 72;

const Sidebar = ({ open, navigation, onSelectSegment }) => (
  <Drawer
    variant="permanent"
    sx={{
      width: open ? drawerWidth : drawerWidthCollapsed,
      flexShrink: 0,
      transition: 'width 0.3s',
      [`& .MuiDrawer-paper`]: {
        width: open ? drawerWidth : drawerWidthCollapsed,
        overflowX: 'hidden',
        transition: 'width 0.3s',
        backgroundColor: '#f5f5f5', // Set background color to gray
      },
    }}
  >
    <Toolbar />
    <List>
      {navigation.map((item, index) =>
        item.kind === 'header' && open ? (
          <Typography
            key={index}
            sx={{
              margin: '16px 16px 8px',
              fontWeight: 'bold',
              color: '#888',
              textTransform: 'uppercase',
              fontSize: '0.75rem',
            }}
          >
            {item.title}
          </Typography>
        ) : (
          item.segment && (
            <ListItem
              button
              key={item.segment}
              sx={{ justifyContent: open ? 'flex-start' : 'center' }}
              onClick={() => onSelectSegment(item.segment)} // Trigger content change
            >
              <ListItemIcon sx={{ minWidth: open ? '40px' : 'unset', justifyContent: 'center', color: 'black', }}>
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.title} />}
            </ListItem>
          )
        )
      )}
    </List>
  </Drawer>
);

export default Sidebar;
