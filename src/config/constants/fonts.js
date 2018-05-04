const type = {
  light: {
    fontFamily: 'Open Sans'
  },
  regular: {
    fontFamily: 'Open Sans'
  },
  medium: {
    fontFamily: 'Roboto'
  }
}

const size = {
  h1: '2.5em',
  h2: '2em',
  h3: '1.9em',
  h4: '1.8em',
  h5: '1.5em',
  h6: '1.3em',
  input: '1em',
  regular: '1.1em',
  button: '0.9em',
  secondaryButton: '0.85em',
  medium: '1em',
  small: '0.9em',
  tiny: '0.8em',
  xs: '0.6em'
}

const lineHeight = {
  boost: '24px',
  regular: '20px',
  small: '16px'
}

const style = {
  navbarTitle: {
    ...type.medium,
    fontSize: size.h5
  },
  h1: {
    fontSize: size.h1
  },
  h2: {
    fontSize: size.h2
  },
  h3: {
    ...type.light,
    fontSize: size.h3
  },
  h4: {
    ...type.light,
    fontSize: size.h4
  },
  h5: {
    fontSize: size.h5
  },
  h6: {
    ...type.regular,
    fontSize: size.h6
  },
  formTitle: {
    ...type.regular,
    fontSize: size.h4
  },
  medium: {
    ...type.medium,
    fontSize: size.button
  },
  secondaryButton: {
    ...type.medium,
    fontSize: size.secondaryButton
  },
  heavyNormal: {
    ...type.medium,
    fontSize: size.regular
  },
  normal: {
    ...type.regular,
    fontSize: size.regular,
    lineHeight: lineHeight.regular
  },
  description: {
    ...type.regular,
    fontSize: size.medium,
    lineHeight: lineHeight.regular
  },
  heavyDescription: {
    ...type.medium,
    fontSize: size.medium
  },
  input: {
    ...type.regular,
    fontSize: size.input
  },
  footnote: {
    ...type.regular,
    fontSize: size.small
  },
  footnoteHeavy: {
    ...type.medium,
    fontSize: size.small
  },
  detail: {
    ...type.regular,
    fontSize: size.tiny
  },
  detailHeavy: {
    ...type.medium,
    fontSize: size.tiny
  }
}

export const Fonts = {
  lineHeight,
  size,
  style,
  type
}
