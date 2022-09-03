import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AddCircle, Home, Logout, MenuBook, Payment, RateReview, ShoppingBag, ShoppingBasket, SupervisorAccount } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const { logOut, isAdmin } = useAuth();
    const navigate = useNavigate();

    // storing dashboard links names in a array. two different array for normal registered user and admin.
    let dashboardLinkNames;
    if (isAdmin) {
        dashboardLinkNames = ['Home', 'Manage All Orders', 'Add Product', 'Make Admin', 'Manage Products', 'Logout'];
    }
    else {
        dashboardLinkNames = ['Home', 'Payment', 'My Orders', 'Review', 'Logout'];
    }

    // separate set of icons for admin and normal user
    const handleIcons = index => {
        if (isAdmin) {
            switch (index) {

                case 0:
                    return <Home />;
                case 1:
                    return <MenuBook />;
                case 2:
                    return <AddCircle />
                case 3:
                    return <SupervisorAccount />
                case 4:
                    return <ShoppingBasket />
                case 5:
                    return <Logout />

                default:
                    break;
            }
        }
        else {
            switch (index) {

                case 0:
                    return <Home />;
                case 1:
                    return <Payment />;
                case 2:
                    return <ShoppingBag />
                case 3:
                    return <RateReview />
                case 4:
                    return <Logout />

                default:
                    break;
            }
        }
    };

    // setting route paths to navigate when links are clicked
    const handleDashboardLinks = path => {
        const url = path.replace(/\s/g, '').toLowerCase();
        if (url === 'home') {
            navigate('/');
        }
        else if (url === 'logout') {
            logOut(navigate
            );
        }
        else if (isAdmin) {
            navigate(`/dashboard/admin/${url}`);
        }
        else {

            navigate(`/dashboard/${url}`);
        }
    }

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <List>
                {dashboardLinkNames.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => handleDashboardLinks(text)}>
                            <ListItemIcon>
                                {handleIcons(index)}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

export default Dashboard;
