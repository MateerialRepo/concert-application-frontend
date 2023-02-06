import React from 'react'

const ConcertSearch = (props) => {
  return (
    <form action="">
        <div>
            <div>
                <label htmlFor="year">Year</label>
                <select name="" id="year">
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div>
                <label htmlFor="month">Month</label>
                <select name="" id="month">
                    <option value="1">January</option>
                </select>
            </div>
        </div>
    </form>
  )
}

export default ConcertSearch