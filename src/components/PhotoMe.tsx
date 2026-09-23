import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SectionTitle from './SectionTitle';

const previewImages = [
  new URL('../assets/photo/cone_in_light.jpg', import.meta.url).href,
  new URL('../assets/photo/dock_in_pond.jpg', import.meta.url).href,
  new URL('../assets/photo/freedom_color.jpg', import.meta.url).href,
  new URL('../assets/photo/thrift_brook.jpg', import.meta.url).href,
  new URL('../assets/photo/plaza.jpg', import.meta.url).href,
  new URL('../assets/photo/state_bw.jpg', import.meta.url).href,
  new URL('../assets/photo/subway.jpg', import.meta.url).href,
  new URL('../assets/photo/wash_tree.jpg', import.meta.url).href,
];

export default function PhotoMe() {
  return (
    <Box>
      <SectionTitle>Photography</SectionTitle>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Love to take film pictures in my free time! Here is a sneak peek of some of my shots.
      </Typography>

      {/* Sneak Peek Gallery */}
      <Grid
        container
        spacing={2}
        sx={{ mb: 3 }}
      >
        {previewImages.map((src, index) => (
          <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
            <Box
              component="img"
              src={src}
              alt={`Photography preview ${index + 1}`}
              loading="lazy"
              sx={{
                display: 'block',
                width: '100%',
                height: { xs: 160, md: 240 },
                objectFit: 'cover',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                filter: 'grayscale(35%)',
                transition: 'filter 200ms ease, border-color 200ms ease',
                '&:hover': { filter: 'none', borderColor: 'primary.dark' },
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* VSCO Link */}
      <Typography
        component="a"
        href="https://vsco.co/nicholas-hillengas/gallery"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontWeight: 600,
          textDecoration: 'none',
          color: 'primary.main',
        }}
      >
        View full gallery →
      </Typography>
    </Box>
  );
}
