import { FC } from 'react'
import './index.scss'
import Composite from './composite'
import Workspace from './workspace'
import Settings from './settings'

interface IConfigurationForm {}

const ConfigurationForm: FC<IConfigurationForm> = () => {
  return (
    <div className='app-configuration'>
      <Composite />
      <Workspace />
      <Settings />
    </div>
  )
}

export default ConfigurationForm
