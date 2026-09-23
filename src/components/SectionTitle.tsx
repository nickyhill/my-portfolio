import { Box, Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { accentGradient, gradientText } from '../../shared-theme/themePrimitives';

interface SectionTitleProps {
  children: React.ReactNode;
  variant?: TypographyProps['variant'];
}

// Terminal-style heading: "// Title" followed by a fading gradient rule
export default function SectionTitle({ children, variant = 'h3' }: SectionTitleProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
      <Typography variant={variant} component="h2" sx={{ whiteSpace: 'nowrap' }}>
        <Box component="span" sx={{ ...gradientText, mr: 1 }}>
          {'//'}
        </Box>
        {children}
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          height: '1px',
          background: accentGradient,
          maskImage: 'linear-gradient(to right, black, transparent)',
          opacity: 0.7,
        }}
      />
    </Box>
  );
}
