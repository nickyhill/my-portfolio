import * as React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { StyledCard, StyledCardContent} from './StyleCard';
import projectMeData from '../data/projects.json';
import type { ProjectExperience } from '../interface/project';


const projectData = Object.values(projectMeData).map((edu: any) => edu as ProjectExperience);

export default function ProjectMe() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);

  const handleFocus = (index: number) => setFocusedCardIndex(index);
  const handleBlur = () => setFocusedCardIndex(null);

  return (
    <Box id="project">
      <Typography variant="h3" gutterBottom>
        Projects
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'stretch',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gridAutoRows: '1fr',
        }}
      >
        {projectData.map((project, index) => {

          return (
            <Grid key={index} sx={{ display: 'flex' }}>
              <Box
                component="a"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: 'flex', width: '100%', textDecoration: 'none', cursor: 'pointer' }}
              >
                <StyledCard
                  variant="outlined"
                  tabIndex={0}
                  onFocus={() => handleFocus(index)}
                  onBlur={handleBlur}
                  className={focusedCardIndex === index ? 'Mui-focused' : ''}
                  sx={{ width: '100%' }}
              >
                <StyledCardContent sx={{ gap: 2 }}>
                  <Stack spacing={1.5}>
                    {/* Logo + Company */}
                    <Typography variant="h6" fontWeight="bold">
                    {project.title}
                    </Typography>

                    <Typography variant="body2" fontWeight={500}>
                      {project.description}
                    </Typography>

                    <Typography variant="caption" color="text.secondary" >
                      {project.url}
                    </Typography>

                  </Stack>
                </StyledCardContent>
              </StyledCard>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

