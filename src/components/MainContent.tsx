import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


// My Imports
import AboutMe from './AboutMe';
import EducationMe from './EducationMe';
import WorkMe from './WorkMe';
import ProjectMe from './ProjectMe';
import PhotoMe from './PhotoMe';

import {StyledCard} from './StyleCard';


const bannerImg = new URL('../assets/banner/freedom-tower.jpg', import.meta.url).href;

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});


export function Search() {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}

export default function MainContent({ setCurrentSection }: { setCurrentSection: (section: string) => void }) {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };


  const divider = <Grid size={{ xs: 12, md: 6 }}>
          <StyledCard
            variant="outlined"
            onFocus={() => handleFocus(1)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 1 ? 'Mui-focused' : ''}
          >
          </StyledCard>
      </Grid>

  const homeRed = React.useRef<HTMLDivElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const educationRef = React.useRef<HTMLDivElement>(null);
  const workRef = React.useRef<HTMLDivElement>(null);
  const projectRef = React.useRef<HTMLDivElement>(null);
  const photoRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const sections = [
      {id: 'home', ref: homeRed },
      { id: 'about', ref: aboutRef },
      { id: 'education', ref: educationRef },
      { id: 'work', ref: workRef },
      { id: 'projects', ref: projectRef },
      { id: 'photos', ref: photoRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find((s) => s.ref.current === entry.target);
            if (section) setCurrentSection(section.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 } // trigger when section is in middle of viewport
    );

    sections.forEach((s) => {
      if (s.ref.current) observer.observe(s.ref.current);
    });

    return () => {
      sections.forEach((s) => {
        if (s.ref.current) observer.unobserve(s.ref.current);
      });
    };
    }, [setCurrentSection]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>

      {/* Banner Section */}
      <Box ref={homeRed} id="home" 
        sx={{
          position: 'relative',
          height: { xs: 300, md: 400 }, // adjust height for mobile/desktop
          width: '100%',
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'common.white', // default text color on banner
          textAlign: 'center',
          px: 2,
        }} >
        {/* Optional overlay for better readability */}
        <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0, 0, 0, 0.4)', // semi-transparent overlay
          borderRadius: 2,
        }} />

        {/* Text content */}
        <Box
          sx={{
            px: { xs: 2, sm: 4, md: 10 }, // responsive horizontal padding
            textAlign: { xs: 'center', md: 'left' },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <StyledTypography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              lineHeight: 1.2,
            }}
          >
            Nicholas Hillengas
          </StyledTypography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}
          >
            <i>Cybersecurity Professional</i>
          </Typography>
          <Typography
            variant="subtitle1"
            borderLeft={2}
            borderColor="primary.main"
            pl={1.5}
            sx={{
              fontStyle: 'italic',
              mt: 1,
              fontSize: { xs: '0.8rem', sm: '1rem', md: '1.1rem' },
            }}
          >
            I am passionate about solving problems and protecting individual's, and company's data
          </Typography>
        </Box>

      </Box>

      {divider}

      {divider}
      <Box ref={aboutRef} id="about">
        <AboutMe />
      </Box>
      {divider}
      <Box ref={educationRef} id="education">
        <EducationMe />
      </Box>
      {divider}
      <Box ref={workRef} id="work">
        <WorkMe />
      </Box>
      {divider}
      <Box ref={projectRef} id="projects">
        <ProjectMe />
      </Box>
      {divider}
      <Box ref={photoRef} id="photos">
        <PhotoMe />
      </Box>
    </Box>
  );
}
