// import Swal from 'sweetalert2'
// import { Button } from 'react-bootstrap'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {

  // const handleAlert = () => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire(
  //         'Deleted!',
  //         'Your file has been deleted.',
  //         'success'
  //       )
  //     }
  //   })
  // }

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
