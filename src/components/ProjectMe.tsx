import { Box, Typography, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import { StyledCard, StyledCardContent} from './StyleCard';
import SectionTitle from './SectionTitle';
import projectMeData from '../data/projects.json';
import type { ProjectExperience } from '../interface/project';


const projectData = Object.values(projectMeData).map((edu: any) => edu as ProjectExperience);

export default function ProjectMe() {
  return (
    <Box>
      <SectionTitle>Projects</SectionTitle>

      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
        }}
      >
        {projectData.map((project, index) => {
          const isGitHub = project.url.includes('github.com');
          const displayUrl = project.url.replace(/^https?:\/\/(www\.)?/, '');

          return (
            <Box
              key={index}
              component="a"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}
            >
              <StyledCard variant="outlined" sx={{ width: '100%' }}>
                <StyledCardContent sx={{ gap: 2 }}>
                  <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
                    <Stack direction="row" spacing={1} alignItems="flex-start" justifyContent="space-between">
                      <Typography variant="h6" fontWeight="bold">
                        {project.title}
                      </Typography>
                      <LaunchRoundedIcon fontSize="small" sx={{ color: 'primary.main', mt: 0.25 }} />
                    </Stack>

                    <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                      {project.description}
                    </Typography>

                    <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'primary.light' }}>
                      {isGitHub && <GitHubIcon sx={{ fontSize: 16 }} />}
                      <Typography variant="caption" sx={{ overflowWrap: 'anywhere' }}>
                        {displayUrl}
                      </Typography>
                    </Stack>
                  </Stack>
                </StyledCardContent>
              </StyledCard>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
