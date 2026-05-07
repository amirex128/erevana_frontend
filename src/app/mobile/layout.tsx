// components/MobileLayout.tsx
'use client'

import { ReactNode, useState } from 'react'
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    BottomNavigation,
    BottomNavigationAction,
    Paper,
} from '@mui/material'
import {
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    Lightbulb as LightbulbIcon,
    Psychology as PsychologyIcon,
    Quiz as QuizIcon,
    Person as PersonIcon,
} from '@mui/icons-material'

interface MobileLayoutProps {
    children: ReactNode
}

export default function MobileLayout({ children }: MobileLayoutProps) {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [bottomNavValue, setBottomNavValue] = useState(0)

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
            }}
        >
            {/* Mobile Container */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '430px',
                    height: '100vh',
                    maxHeight: '932px',
                    backgroundColor: '#fff',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                }}
            >
                {/* Header */}
                <AppBar
                    position="static"
                    elevation={1}
                    sx={{
                        backgroundColor: '#fff',
                        color: '#000',
                    }}
                >
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                همیار ذهن
                            </Typography>
                            <span style={{ fontSize: '24px' }}>🧠</span>
                        </Box>

                        <IconButton edge="end" color="inherit">
                            <NotificationsIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                {/* Drawer */}
                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{ width: 280 }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                    >
                        <Box sx={{ p: 3, borderBottom: '1px solid #eee' }}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                منو
                            </Typography>
                        </Box>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LightbulbIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="بوم افکار" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <PsychologyIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="همیار" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <QuizIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="تست‌ها" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <PersonIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="پروفایل" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>

                {/* Main Content */}
                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        overflow: 'auto',
                        pb: 8,
                    }}
                >
                    {children}
                </Box>

                {/* Bottom Navigation */}
                <Paper
                    sx={{
                        position: 'fixed',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100%',
                        maxWidth: '430px',
                        zIndex: 1000,
                    }}
                    elevation={3}
                >
                    <BottomNavigation
                        value={bottomNavValue}
                        onChange={(event, newValue) => {
                            setBottomNavValue(newValue)
                        }}
                        showLabels
                        sx={{
                            height: 70,
                            '& .MuiBottomNavigationAction-root': {
                                minWidth: 'auto',
                            },
                        }}
                    >
                        <BottomNavigationAction
                            label="بوم افکار"
                            icon={<LightbulbIcon />}
                        />
                        <BottomNavigationAction
                            label="همیار"
                            icon={<PsychologyIcon />}
                        />
                        <BottomNavigationAction
                            label="تست‌ها"
                            icon={<QuizIcon />}
                        />
                        <BottomNavigationAction
                            label="پروفایل"
                            icon={<PersonIcon />}
                        />
                    </BottomNavigation>
                </Paper>
            </Box>
        </Box>
    )
}
