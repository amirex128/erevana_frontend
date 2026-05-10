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
import Link from 'next/link'

interface MobileLayoutProps {
    children: ReactNode
}

export default function ClientsLayout({ children }: MobileLayoutProps) {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [bottomNavValue, setBottomNavValue] = useState(0)

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
            }}
        >
            {/* Header */}
            <AppBar
                position="static"
                elevation={1}
                sx={{
                    bgcolor: 'primary.main',
                    color:'primary.contrastText',
                    flexShrink: 0,
                    zIndex:9999
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
                                <ListItemIcon sx={{ minWidth: 40 }}>
                                    <LightbulbIcon />
                                </ListItemIcon>
                                <ListItemText primary="بوم افکار" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{ minWidth: 40 }}>
                                    <PsychologyIcon />
                                </ListItemIcon>
                                <ListItemText primary="همیار" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{ minWidth: 40 }}>
                                    <QuizIcon />
                                </ListItemIcon>
                                <ListItemText primary="تست‌ها" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{ minWidth: 40 }}>
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
                    overflowY: 'scroll',
                    scrollbarGutter: 'stable',
                    WebkitOverflowScrolling: 'touch',
                    px: 2,
                    py: 2,
                }}
            >
                {children}
            </Box>

            {/* Bottom Navigation */}
            <Paper
                elevation={3}
            >
                <BottomNavigation

                    value={bottomNavValue}
                    onChange={(event, newValue) => {
                        setBottomNavValue(newValue)
                    }}
                    showLabels
                    sx={{
                        height: 60,
                        '& .MuiBottomNavigationAction-root': {
                            minWidth: 'auto',
                        },
                    }}
                >
                    <BottomNavigationAction
                        sx={{}}

                        label="بوم افکار"
                        href="/clients/boom"
                        component={Link}
                        icon={<LightbulbIcon />}
                    />
                    <BottomNavigationAction
                        sx={{}}

                        label="همیار"
                        href="/clients/chat"
                        component={Link}
                        icon={<PsychologyIcon />}
                    />
                    <BottomNavigationAction
                        sx={{}}

                        label="تست‌ها"
                        href="/clients/tests"
                        component={Link}
                        icon={<QuizIcon />}
                    />
                    <BottomNavigationAction
                        sx={{}}

                        label="پروفایل"
                        href="/clients/profile"
                        component={Link}
                        icon={<PersonIcon />}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    )
}
