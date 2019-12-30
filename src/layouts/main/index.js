import React from "react"
import PropTypes from "prop-types"

import BaseLayout from "Layouts/base"

const MainLayout = ({ children }) => <BaseLayout>{children}</BaseLayout>

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
