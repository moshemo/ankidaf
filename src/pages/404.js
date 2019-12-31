import React from 'react'
import SEO from 'Components/seo'
import ErrorSec from 'Error'
import { ResetCSS } from 'CSS/reset'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <ResetCSS />
    <ErrorSec></ErrorSec>
  </>
)

export default NotFoundPage
