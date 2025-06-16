import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJob from './pages/AddJob'
import NotFoundPage from './pages/NotFoundPage'
import MainLayout from './layouts/MainLayout'



const App = () => {

  const addJob = async (newJob) => {
    const res = await fetch ('/api/jobs',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return res;
  }

  const deleteJob = async(id) =>{
    const res = await fetch (`/api/jobs/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<MainLayout/>}>
        <Route index element = {<HomePage/>} />
        <Route path='/jobs' element = {<JobsPage/>} />
        <Route path='/add-job' element = {<AddJob addNewJob = {addJob}/>} />
        <Route path='/jobs/:id' element={<JobPage deleteJob = {deleteJob}/>} loader = {jobLoader}/>
        <Route path='*' element = {<NotFoundPage/>} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
