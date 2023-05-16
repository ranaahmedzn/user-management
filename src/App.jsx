import Swal from 'sweetalert2'
import './App.css'
import { Button } from 'react-bootstrap'

function App() {

  const handleAlert = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <>
      <div className='text-center'>
        <h1 className='my-3'>User Management System</h1>
        <Button onClick={handleAlert} variant="primary">Primary</Button>
      </div>
    </>
  )
}

export default App
