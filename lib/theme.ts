export const colors = {
  text: '#000',
  background: '#fff',
  primary: '#07c',
  secondary:
    'hsl(48.990825688073386, 45.991561181434605%, 46.470588235294116%)',
};

export const breakpoints: any = ['40em', '52em', '64em'];
breakpoints.phone = breakpoints[0];
breakpoints.tablet = breakpoints[1];
breakpoints.desktop = breakpoints[2];

export const media = {
  phone: `@media screen and (min-width: ${breakpoints.phone})`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
};
