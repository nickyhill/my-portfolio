import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


// My Imports
import AboutMe from './AboutMe';
import EducationMe from './EducationMe';
import WorkMe from './WorkMe';
import ProjectMe from './ProjectMe';
import PhotoMe from './PhotoMe';
import socials from '../data/socials.json';
import { monoFont, accentGradient, gradientText } from '../../shared-theme/themePrimitives';


const bannerImg = new URL('../assets/banner/freedom-tower.jpg', import.meta.url).href;

const blink = keyframes`
  50% { opacity: 0; }
`;

const heroTags = ['CompTIA Security+', 'ISC2 CC', 'AWS', 'DevSecOps','M.S. Cybersecurity'];

export default function MainContent({ setCurrentSection }: { setCurrentSection: (section: string) => void }) {
  const divider = <Divider />;

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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 5, md: 7 } }}>

      {/* Banner Section */}
      <Box ref={homeRed} id="home"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: 380, md: 460 },
          width: '100%',
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
          color: 'common.white',
        }} >
        {/* Dark overlay: solid on the left behind the text, fading to the photo on the right */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'rgba(5, 8, 12, 0.8)',
              md: 'linear-gradient(90deg, rgba(5, 8, 12, 0.95) 0%, rgba(5, 8, 12, 0.8) 45%, rgba(5, 8, 12, 0.35) 100%)',
            },
          }} />
        {/* Faint grid texture */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.12,
            backgroundImage:
              'linear-gradient(hsla(236, 85%, 65%, 0.6) 1px, transparent 1px), linear-gradient(90deg, hsla(236, 85%, 65%, 0.6) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(90deg, black, transparent 70%)',
          }} />
        {/* Gradient accent bar along the top edge */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: accentGradient }} />

        {/* Text content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            px: { xs: 3, sm: 5, md: 8 },
            py: 6,
            maxWidth: 820,
          }}
        >
          <Typography
            sx={{ fontFamily: monoFont, color: 'primary.main', fontSize: { xs: '0.85rem', md: '1rem' }, mb: 1.5 }}
          >
            {'> whoami'}
            <Box component="span" sx={{ animation: `${blink} 1s step-end infinite`, ml: 0.5 }}>_</Box>
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.1rem', sm: '3rem', md: '4rem' },
              lineHeight: 1.1,
              mb: 1.5,
            }}
          >
            Nicholas Hillengas
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }, mb: 2, ...gradientText, width: 'fit-content' }}
          >
            Security-Focused Cloud Engineer · Systems Administrator
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'grey.300',
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              maxWidth: 600,
              mb: 3,
            }}
          >
            I am passionate about solving problems and protecting individuals' and companies' data.
          </Typography>

          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {heroTags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                sx={{
                  borderColor: 'primary.dark',
                  bgcolor: 'rgba(5, 8, 12, 0.6)',
                  '& .MuiChip-label': { color: 'grey.200', fontFamily: monoFont, fontWeight: 500 },
                }}
              />
            ))}
          </Stack>

          <Stack direction="row" spacing={1.5}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<LinkedInIcon />}
              href={`https://www.linkedin.com/in/${socials.linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href={`https://github.com/${socials.gitHub}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </Stack>
        </Box>

      </Box>

      <Box ref={aboutRef} id="about" sx={{ scrollMarginTop: 110 }}>
        <AboutMe />
      </Box>
      {divider}
      <Box ref={educationRef} id="education" sx={{ scrollMarginTop: 110 }}>
        <EducationMe />
      </Box>
      {divider}
      <Box ref={workRef} id="work" sx={{ scrollMarginTop: 110 }}>
        <WorkMe />
      </Box>
      {divider}
      <Box ref={projectRef} id="projects" sx={{ scrollMarginTop: 110 }}>
        <ProjectMe />
      </Box>
      {divider}
      <Box ref={photoRef} id="photos" sx={{ scrollMarginTop: 110 }}>
        <PhotoMe />
      </Box>
    </Box>
  );
}
