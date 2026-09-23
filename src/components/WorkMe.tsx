import { Box, Typography, Stack } from '@mui/material';
import { StyledCard, StyledCardContent} from './StyleCard';
import SectionTitle from './SectionTitle';
import workMeData from '../data/work.json';
import type { WorkExperience } from '../interface/work';
import defaultLogo from '../assets/work/react.svg';


const workData = Object.values(workMeData).map((edu: any) => edu as WorkExperience);
const reversedWorkData = workData.reverse();
export default function WorkMe() {
  return (
    <Box>
      <SectionTitle>Work Experience</SectionTitle>

      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
        }}
      >
        {reversedWorkData.map((work, index) => {
          const logoSrc = work.logo
            ? new URL(`../assets/work/${work.logo}`, import.meta.url).href
            : defaultLogo;

          return (
            <StyledCard key={index} variant="outlined" tabIndex={0}>
              <StyledCardContent sx={{ gap: 2 }}>
                <Stack spacing={1.5}>
                  {/* Logo + Company */}
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        p: 0.75,
                        borderRadius: 1.5,
                        bgcolor: 'hsl(0, 0%, 96%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        component="img"
                        src={logoSrc}
                        alt={`${work.company} logo`}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = defaultLogo;
                        }}
                        sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </Box>

                    <Box>
                      <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.3 }}>
                        {work.company}
                      </Typography>
                      <Typography variant="caption" color="primary.main">
                        {work.timeframe}
                      </Typography>
                    </Box>
                  </Stack>

                  <Typography variant="body2" fontWeight={500}>
                    {work.position}
                  </Typography>

                  <Box component="ul" sx={{ pl: 2, m: 0, '& li::marker': { color: 'primary.main' } }}>
                    {work.duties.map((duty, i) => (
                      <Typography
                        key={i}
                        component="li"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.5 }}
                      >
                        {duty}
                      </Typography>
                    ))}
                  </Box>
                </Stack>
              </StyledCardContent>
            </StyledCard>
          );
        })}
      </Box>
    </Box>
  );
}
