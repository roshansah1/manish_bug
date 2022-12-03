import React, {useState} from 'react';
import { AppBar, Toolbar, Tabs, Tab, Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom'
//Creating NavBar 
const Header = () => {
  const [value, setValue] = useState(1);

  return (
    <div>
        <AppBar sx={{ backgroundColor: "#232F3D" }} position="fix">
        <Toolbar>
            <Typography>
              <LibraryBooksIcon />
            </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/books" label="refresh" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Header