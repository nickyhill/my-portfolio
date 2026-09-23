import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  transition: 'border-color 150ms ease, box-shadow 150ms ease',
  '&:hover': {
    borderColor: (theme.vars || theme).palette.primary.dark,
    boxShadow: `0 0 0 1px ${(theme.vars || theme).palette.primary.dark}, -8px 10px 28px -14px hsla(212, 95%, 60%, 0.45), 8px 10px 28px -14px hsla(275, 85%, 66%, 0.45)`,
  },
  '&:focus-visible': {
    outline: '2px solid',
    outlineColor: (theme.vars || theme).palette.primary.main,
    outlineOffset: '2px',
  },
}));

export const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 20,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 20,
  },
});
