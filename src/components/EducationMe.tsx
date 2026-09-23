import { Box, Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { StyledCard, StyledCardContent} from './StyleCard';
import SectionTitle from './SectionTitle';
import educationMeData from '../data/education.json';
import certificationsData from '../data/certifications.json';

export default function EducationMe() {
  return (
    <Box>
      <Grid container spacing={3}>
        {/* Education */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <SectionTitle>Education</SectionTitle>
          <Grid container spacing={2} sx={{ alignItems: 'stretch' }}>
            {Object.values(educationMeData).map((edu: any, index: number) => (
              <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }} key={index}>
                <StyledCard variant="outlined" tabIndex={0} sx={{ width: '100%' }}>
                  <StyledCardContent sx={{ gap: 2 }}>
                    <Stack spacing={1.5}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        {edu.school}
                      </Typography>
                      <Box sx={{ borderLeft: '6px solid',
                        borderImage: index === 1 ? 'linear-gradient(to bottom, #861F41 50%, #E5751F) 1' : 'linear-gradient(to bottom, #46166b 50%, #eeb211) 1' ,
                        pl: 1.5 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {index === 1 ? 'Graduated' : 'Expected'}: {edu.expectedGrad}
                        </Typography>
                      </Box>
                      {edu.major && (
                        <Typography variant="body2" color="text.secondary">
                          <strong>Major:</strong> {edu.major}
                        </Typography>
                      )}
                      {edu.gpa && (
                        <Typography variant="body2" color="text.secondary">
                          <strong>GPA:</strong> {edu.gpa}
                        </Typography>
                      )}
                    </Stack>
                  </StyledCardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Certifications */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <SectionTitle>Certifications</SectionTitle>
          <Stack spacing={2}>
            {certificationsData.map((cert, index) => (
              <StyledCard variant="outlined" tabIndex={0} key={index}>
                <StyledCardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {cert.name}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: 'primary.main' }}>
                    {cert.issuer}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {cert.timeframe}
                  </Typography>
                </StyledCardContent>
              </StyledCard>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
