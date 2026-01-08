import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

interface AppAppBarProps {
  currentSection: string;
}

export default function AppAppBar({ currentSection }: AppAppBarProps) {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'work', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'photos', label: 'Photography' },
  ];

  const handleScrollTo = (id: string) => {
    if (id === 'home') {
      // scroll all the way to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          {/* Logo + Desktop Links */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Box component="img" src="/njh_logo.png" alt="Logo" sx={{ height: 32 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
              {sections.map((section) => {
                const isActive = currentSection === section.id;
                return (
                  <Button
                    key={section.id}
                    size="small"
                    variant="text"
                    onClick={() => handleScrollTo(section.id)}
                    sx={{
                      ml: 1,
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? 'text.primary' : 'text.secondary',
                      bgcolor: isActive ? 'grey.200' : 'transparent',
                      borderRadius: 1,
                      '&:hover': {
                        bgcolor: isActive ? 'grey.200' : 'action.hover',
                      },
                    }}
                  >
                    {section.label}
                  </Button>
                );
              })}
            </Box>

          </Box>

          {/* Mobile Drawer + ColorMode */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              sx={{ top: 'var(--template-frame-height, 0px)' }}
            >
              <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
                {sections.map((section) => {
                  const isActive = currentSection === section.id;
                  return (
                    <Button
                      key={section.id}
                      size="small"
                      variant="text"
                      onClick={() => handleScrollTo(section.id)}
                      sx={{
                        ml: 1,
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? 'text.primary' : 'text.secondary',
                        bgcolor: isActive ? 'grey.200' : 'transparent',
                        borderRadius: 1,
                        '&:hover': {
                          bgcolor: isActive ? 'grey.200' : 'action.hover',
                        },
                      }}
                    >
                      {section.label}
                    </Button>
                  );
                })}
              </Box>

            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
