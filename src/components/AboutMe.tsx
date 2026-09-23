import { Box, Typography, Chip } from '@mui/material';
import aboutMeData from '../data/aboutme.json';
import Grid from '@mui/material/Grid';
import { StyledCard, StyledCardContent} from './StyleCard';
import SectionTitle from './SectionTitle';
import { monoFont } from '../../shared-theme/themePrimitives';

export default function AboutMe() {
  return (
    <Box>
      <SectionTitle>About Me</SectionTitle>

      <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
        {/* Description */}
        <Grid size={{ xs: 12, md: 7 }} sx={{ display: 'flex' }}>
          <StyledCard variant="outlined" tabIndex={0} sx={{ width: '100%' }}>
            <StyledCardContent sx={{ gap: 2 }}>
              {aboutMeData.description.split('\n').map((paragraph, index) => (
                <Typography key={index} variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {paragraph}
                </Typography>
              ))}
            </StyledCardContent>
          </StyledCard>
        </Grid>

        {/* Skills */}
        <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex' }}>
          <StyledCard variant="outlined" tabIndex={0} sx={{ width: '100%' }}>
            <StyledCardContent sx={{ gap: 2 }}>
              <Typography variant="h5">Skills & Technologies</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {aboutMeData.skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    variant="outlined"
                    sx={{
                      fontFamily: monoFont,
                      borderColor: 'primary.dark',
                      bgcolor: 'transparent',
                      '& .MuiChip-label': { color: 'primary.light', fontFamily: monoFont, fontWeight: 500 },
                    }}
                  />
                ))}
              </Box>
            </StyledCardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
}
