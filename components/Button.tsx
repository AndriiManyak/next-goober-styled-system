import { styled } from 'goober';
import { colors, media } from '../lib/theme';
import { variant } from 'styled-system';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children?: string;
  onClick?: () => void;
}

export const Button = ({ variant, children, onClick }: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled('button')`
  padding: 1em 2em;
  width: 100%;
  ${variant({
    variants: {
      primary: {
        background: colors.primary,
      },
      secondary: {
        background: colors.secondary,
      },
    },
  })}
  ${media.desktop} {
    height: 4em;
    max-width: 200px;
  }
`;
