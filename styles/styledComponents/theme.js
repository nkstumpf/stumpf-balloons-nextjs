
const breakpoints = {
    mobile: '479px',
    tablet: '760px',
    desktop: '960px',
    desktopxl: '1200px',
    desktopfull: '1440px',
};
 
const theme = {
    colors: {
        background: {
            light: '#f5f5f5',
            dark: '#191919',
            transparentdark: 'rgba(0, 0, 0, 0.7)',
            accent: '#b455be',
            purewhite: '#FFFFFF',
            pureblack: '#000000',
        },
        text: {
            dark: '#191919',
            light: '#f5f5f5',
            accent: '#b455be',
        },
    },
    fonts: {
      heading: 'Nunito, sans-serif',
      body: "Arial",
      accent: "sans-serif",
      weights: {
        light: 300,
        normal: 400,
        bold: 600,
      },
      sizes: {
        72: '4.5rem',
        60: '3.75rem',
        52: '3.25rem',
        headingxl: '3rem',
        40: '2.5rem',
        36: '2.25rem',
        headinglg: '1.875rem',
        heading: '1.5rem',
        headingsm: '1.25rem',
        18: '1.125rem',
        body: '1rem', // base size
        14: '0.875rem',
        12: '0.75rem',
      },
    },
    breakpoints,
};

export { breakpoints, theme };

// usage syntax example: color: ${(props) => props.theme.color.black};