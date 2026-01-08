import * as React from 'react';
import { Box, Container, Divider, IconButton, Typography, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import socials from '../data/socials.json'; // your socials JSON
import njhLogo from '../assets/njh_logo.png';

function Copyright() {
  return (
    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
      © Nicholas Hillengas {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const socialLinks = [
    { icon: <GitHubIcon fontSize="large" />, href: `https://github.com/${socials.gitHub}`, label: 'GitHub' },
    { icon: <LinkedInIcon fontSize="large" />, href: `https://www.linkedin.com/in/${socials.linkedIn}`, label: 'LinkedIn' },
  ];

  return (
    <React.Fragment>
      <Divider sx={{ mb: 2 }} />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 3,
        }}
      >
        {/* Logo */}
        <Box component="img" src={njhLogo} alt="Nicholas Hillengas Logo" sx={{ height: 64 }} />

        {/* Social Icons */}
        <Stack direction="row" spacing={3}>
          {socialLinks.map((social, index) => (
            <IconButton
              key={index}
              color="inherit"
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                transition: '0.3s',
                '&:hover': { color: 'primary.main', transform: 'scale(1.2)' },
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Stack>

        {/* Footer Text */}
        <Box sx={{ textAlign: 'right' }}>
          <Typography variant="body1" color="text.secondary">
            Built with React & MUI
          </Typography>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}
