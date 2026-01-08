import * as React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { StyledCard, StyledCardContent} from './StyleCard';
import educationMeData from '../data/education.json';

export default function EducationMe() {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
        null,
    );

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

  return (
    <Box
      id="education"
    >
      {/* Section Header */}
      <Box>
        <Typography variant="h3" gutterBottom>
          Education
        </Typography>
        <Grid container size='grow' spacing={2} sx={{
                justifyContent: "center",
                alignItems: "stretch",
                display: "flex",
                height: "100%",
          }}>
            {Object.values(educationMeData).map((edu: any, index: number) => (

              <Grid size='grow' sx={{ xs: 12, sm: 6, md: 4, display: 'flex' }} key={index}>
                <StyledCard
                  variant="outlined"
                  onFocus={() => handleFocus(5)}
                  onBlur={handleBlur}
                  tabIndex={0}
                  className={focusedCardIndex === 5 ? 'Mui-focused' : ''}
                  sx={{ height: '100%', width: '100%' }}
                >
                  <StyledCardContent
                                  sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                    gap: 2,
                                  }}
                                >
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
      </Box>

      

      
    </Box>
  );
}
