import './App.css'

function App() {
  return (
    <div className='bg-gray-600 h-screen flex items-center justify-center'>
      <div className='w-2/3 bg-white border rounded shadow-lg'>
        <p className='p-3 bg-gray-100 text-gray-600'>The title of the card here</p>
        <div className='p-3 flex justify-between items-center border-b'>
          <label className='uppercase text-xs bg-orange-500 text-gray-100 px-2 py-1 font-bold border rounded-full'>
            Under Review
          </label>
          <span className='text-sm text-gray-900 font-medium'> May 14, 1988</span>
        </div>
        <div className='p-3'>
          <div className='p-3 bg-gray-100 border rounded'>
            Here is a short comment about this employee.
          </div>
        </div>
        <div className='p-3 bg-gray-100'>
          <span className='font-bold text-gray-500 text-xs pb-2'>EMPLOYEE</span>
          <div className='flex  pt-2'>
            <div className='rounded-full w-12 h-12 bg-sky-700 flex justify-center items-center text-gray-100  text-xs font-bold'>
              VG
            </div>
            <div className='flex flex-col ml-3'>
              <span className='font-bold text-sm'>Victor Gonzalez</span>
              <span className='text-gray-500 mt-1 text-xs'>Instructor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
