import * as React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import aboutMeData from '../data/aboutme.json';
import Grid from '@mui/material/Grid';
import { StyledCard, StyledCardContent} from './StyleCard';

export default function AboutMe() {
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
      id="about"
      
    >
      {/* Section Header */}
      <Box>
        <Typography variant="h3" gutterBottom>
          About Me
        </Typography>
        <Grid size={{ xs: 12, md: 4 }}>
          <StyledCard
            variant="outlined"
            onFocus={() => handleFocus(5)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 5 ? 'Mui-focused' : ''}
            sx={{ height: ' 100%' }}
          >
            <StyledCardContent
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              height: '100%',
                            }}
                          >

                <Typography variant="body2" color="text.secondary">
                    {aboutMeData.description.split('\n\n').map((paragraph, index) => (
                        <React.Fragment key={index}>
                        {paragraph}
                        <br />
                        <br />
                        </React.Fragment>
                    ))}
                </Typography>
                            
            </StyledCardContent>
            
          </StyledCard>

        </Grid>
        
      </Box>

      {/* Skills */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="h5" gutterBottom={true} >
          Skills & Technologies
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {aboutMeData.skills.map((skill, index) => (
            <Chip key={index} label={skill} variant="outlined" />
          ))}
        </Box>
      </Box>

      {/* Quote / Detail */}
      <Box
        sx={{
          borderLeft: 4,
          borderColor: 'primary.main',
          pl: 3,
          mt: 4,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
          {aboutMeData.detailOrQuote}
        </Typography>
      </Box>
    </Box>
  );
}
