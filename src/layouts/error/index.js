import React from "react"
import PropTypes from "prop-types"

import BaseLayout from "Layouts/base"

const ErrorLayout = ({ children }) => <BaseLayout>{children}</BaseLayout>

ErrorLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorLayout
