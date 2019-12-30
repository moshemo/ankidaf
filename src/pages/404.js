import React from "react"

import SEO from "Components/seo"
import ErrorLayout from "Layouts/error"

const ErrorPage = () => (
  <ErrorLayout>
    <SEO title="404: Not found" />
    <h1>404 Error</h1>
    <h2>This is not the page you are looking for.</h2>
    <p>Let's help you get back on track.</p>
  </ErrorLayout>
)

export default ErrorPage
