import React from 'react'

type Props = {}

const DashboardIndexPage = (props: Props) => {
  return (
    <>
    <h1>Hello World</h1>
    <button disabled={true}>Hello World</button>
    <p data-testid='paragraph-blue' className='blue'>This is our paragraph</p>
    <form>
        <input type='text' placeholder='Enter your name' />
        <button data-testid='button-red' className='red' type='submit'>Submit</button>
    </form>
    </>
  )
}

export default DashboardIndexPage