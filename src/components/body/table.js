import React from 'react';
import './table.css';
import { MdOutlineCancel } from "react-icons/md";

const Table = ({ data,startIndex,endIndex }) => {

  return (
    <div className='table'>
    <table>
      <thead>
        <tr>
          <th className='text-right'>Name</th>
          <th className='text-right'>Status</th>
          <th className='text-left'>Start date</th>
          <th className='text-left'>End date</th>
          <th className='text-left'>Budget</th>
        </tr>
      </thead>
      <tbody>
        {data.slice(startIndex,endIndex).map((row) => (
          <tr key={row.id}>
            <td className='text-right'>{row.name}</td>
            {new Date() <= new Date(row.endDate) ?<td> <svg class="checkmark active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg> Active</td>:
            <td className='text-right cancel'> <MdOutlineCancel className='inactive'/>  Inactive</td>
            }
            <td className='text-left'>
              {new Date(row.startDate).toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  })}
</td>
            <td className='text-left'>{new Date(row.endDate).toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  })}</td>
            <td className='text-left'>${(row.budget.toLocaleString())}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;