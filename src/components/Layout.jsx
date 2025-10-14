const Layout = ({ children }) => {
  return (
    <div className="layout">
      <h1 className="layout-title">Triominos</h1>
      {children}
    </div>
  )
}

export default Layout