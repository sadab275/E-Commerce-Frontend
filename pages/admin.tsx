import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../components/pages/Admin/Dashboard/Dashboard';
import Sidebar from '../components/pages/Admin/Sidebar/Sidebar';
import { controller } from '../src/utils/StateController'

interface Props {
}

const admin: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return (
    <div className="flex h-screen overflow-y-hidden">
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default admin