import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-controller-container">
          <div className="configuration-controller-card">
            <h1 className="heading">Layout</h1>
            <div className="checkbox-containers-list">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  value={showContent}
                  id="content"
                  onChange={onChangeContent}
                />
                <label htmlFor="content" className="label-text">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  value={showLeftNavbar}
                  id="leftNavbar"
                  onChange={onChangeLeftNavbar}
                />
                <label htmlFor="leftNavbar" className="label-text">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  value={showRightNavbar}
                  id="rightNavbar"
                  onChange={onChangeRightNavbar}
                />
                <label htmlFor="rightNavbar" className="label-text">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
