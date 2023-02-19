import React, { FC } from 'react'
import './index.scss'
import Composite from './composite'
import Workspace from './workspace'
import Settings from './settings'

interface IConfigurationForm {}

const ConfigurationForm: FC<IConfigurationForm> = () => {
  return (
    <div className='app-card-configuration'>
      <Composite />
      <Workspace />
      <Settings />
    </div>
  )
}

export default ConfigurationForm
