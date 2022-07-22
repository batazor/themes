import {style} from "@vanilla-extract/css";
import {pxToRem} from "../utils";
import {darkTheme, lightTheme} from "./theme.css";
import {recipe, RecipeVariants} from "@vanilla-extract/recipes";

// the base card style with media queries
const card = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  border: `${pxToRem(1)} solid`,
  borderRadius: pxToRem(16),
  padding: pxToRem(48),
  '@media': {
    'screen and (max-width: 768px)': {
      border: '0px',
      borderRadius: '0px',
      padding: `0px 0px ${pxToRem(32)}`,
    }
  }
});

// recipe for the card style
// this ensures we have themeable variations for the card
export const cardStyle = recipe({
  base: card,
  variants: {
    theme: {
      light: {
        background: lightTheme.background.surface,
        borderColor: lightTheme.border.default,
      },
      dark: {
        background: darkTheme.background.surface,
        borderColor: darkTheme.border.default,
      }
    }
  }
});

// Get the type
export type CardStyle = RecipeVariants<typeof cardStyle>;
