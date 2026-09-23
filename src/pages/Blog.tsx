import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../components/AppAppBar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

export default function Blog(props: { disableCustomTheme?: boolean }) {
  const [currentSection, setCurrentSection] = React.useState<string>('home');

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar currentSection={currentSection}/>
      <Container
        maxWidth="xl"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', mt: { xs: 14, md: 16 }, mb: 10, gap: 4, px: { xs: 2, sm: 4, lg: 6 } }}>
        <MainContent setCurrentSection={setCurrentSection}/>
      </Container>
      <Footer />
    </AppTheme>
  );
}
