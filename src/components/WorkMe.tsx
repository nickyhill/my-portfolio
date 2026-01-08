import * as React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { StyledCard, StyledCardContent} from './StyleCard';
import workMeData from '../data/work.json';
import type { WorkExperience } from '../interface/work';
import defaultLogo from '../assets/work/react.svg';


const workData = Object.values(workMeData).map((edu: any) => edu as WorkExperience);
const reversedWorkData = workData.reverse();
export default function WorkMe() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);

  const handleFocus = (index: number) => setFocusedCardIndex(index);
  const handleBlur = () => setFocusedCardIndex(null);

  return (
    <Box id="work">
      <Typography variant="h3" gutterBottom>
        Work Experience
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
        {reversedWorkData.map((work, index) => {
          const logoSrc = work.logo
            ? new URL(`../assets/work/${work.logo}`, import.meta.url).href
            : defaultLogo;

          return (
            <Grid key={index} sx={{ display: 'flex' }}>
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
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box
                        component="img"
                        src={logoSrc}
                        alt={`${work.company} logo`}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = defaultLogo;
                        }}
                        sx={{
                          width: 36,
                          height: 36,
                          objectFit: 'contain',
                          flexShrink: 0,
                        }}
                      />

                      <Typography variant="h6" fontWeight="bold">
                        {work.company}
                      </Typography>
                    </Stack>

                    <Typography variant="body2" fontWeight={500}>
                      {work.position}
                    </Typography>

                    <Typography variant="caption" color="text.secondary">
                      {work.timeframe}
                    </Typography>

                    <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                      {work.duties.map((duty, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body2"
                          color="text.secondary"
                        >
                          {duty}
                        </Typography>
                      ))}
                    </Box>
                  </Stack>
                </StyledCardContent>
              </StyledCard>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

