import React from 'react'
import SEO from 'Components/seo'
import ErrorSec from 'Error'
import { ResetCSS } from 'CSS/reset'

import { ThemeProvider } from 'styled-components'

import { theme } from 'CSS/theme'

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title="404: Not found" />
      <ResetCSS />
      <ErrorSec></ErrorSec>
    </>
  </ThemeProvider>
)

export default NotFoundPage
