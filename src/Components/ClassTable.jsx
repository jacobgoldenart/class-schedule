import React from 'react'
import DataTable from 'react-data-table-component';
import Data from '../sample-data/partial-data.json';
import './ClassTable.css'
function handleClick(){
    console.log(Data.results[0].items[0]);
}
const ExpandedComponent = () => 
{
    return(
        //conditional rendering to avoid displaying if the atribute is missing
    <div className='class-info-exp'>
        <div className='class-info-exp-right'>
            {Data.results[0].items[1].subject_code && <p><span>Subject Code</span>: {Data.results[0].items[1].subject_code}</p>}
            {Data.results[0].items[1].catalog_number && <p>Catalog Number: {Data.results[0].items[1].catalog_number}</p>}
            {Data.results[0].items[1].class_section && <p>Class Section: {Data.results[0].items[1].class_section}</p>}
            {Data.results[0].items[1].course_id && <p>Course ID: {Data.results[0].items[1].course_id}</p>}
            {Data.results[0].items[1].class_title && <p>Class title: {Data.results[0].items[1].class_title}</p>}
            {Data.results[0].items[1].units && <p>Units: {Data.results[0].items[1].units}</p>}
            {Data.results[0].items[1].class_number && <p>Class Number: {Data.results[0].items[1].class_number}</p>}
            {Data.results[0].items[1].component && <p>Component: {Data.results[0].items[1].component}</p>}
            {Data.results[0].items[1].seats_total && <p>Seats Total: {Data.results[0].items[1].seats_total}</p>}
            {Data.results[0].items[1].seats_available && <p>Seats Available: {Data.results[0].items[1].seats_available}</p>}
            {Data.results[0].items[1].instructor && <p>Instructor: {Data.results[0].items[1].instructor}</p>}
            {Data.results[0].items[1].building && <p>Building: {Data.results[0].items[1].building}</p>}
        </div>
        <div className='class-info-exp-left'>
            {Data.results[0].items[1].room && <p>Room: {Data.results[0].items[1].room}</p>}
            {Data.results[0].items[1].days && <p>Days: {Data.results[0].items[1].days}</p>}
            {Data.results[0].items[1].start_time && <p>Start Time: {Data.results[0].items[1].start_time}</p>}
            {Data.results[0].items[1].end_time && <p>End Time: {Data.results[0].items[1].end_time}</p>}
            {Data.results[0].items[1].meeting_number && <p>Meeting Number: {Data.results[0].items[1].meeting_number}</p>}
            {Data.results[0].items[1].session_code && <p>Session Code: {Data.results[0].items[1].session_code}</p>}
            {Data.results[0].items[1].ge_grad_req && <p>GE Grad Req: {Data.results[0].items[1].ge_grad_req}</p>}
            {Data.results[0].items[1].class_meeting_start_date && <p>Class Meeting Start Date: {Data.results[0].items[1].class_meeting_start_date}</p>}
            {Data.results[0].items[1].class_meeting_end_date && <p>Class Meeting End Date: {Data.results[0].items[1].class_meeting_end_date}</p>}
            {Data.results[0].items[1].class_ldesc && <p>Class Description: {Data.results[0].items[1].class_ldesc}</p>}
        </div>
    </div>
    )
}


//<pre>{JSON.stringify(Data, null, 2)}</pre>;


export default function ClassTable() {
    //const columns = Data.results[0].columns;
    const columns = [
        // {
        //   name : 'Subject Code',
        //   type : '',
        //   selector: row => row.subject_code,
        // },
        // {
        //     name : 'Class Section',
        //     type : '',
        //     selector: row => row.class_section,
        // },
        // {
        //     name : 'Class Title',
        //     type : '',
        //     sortable: 'true',
        //     compact: 'true',
        //     wrap: 'true',
        //     selector: row => row.class_title,
        // },
        {
             name : 'Units',
             type : '',
             selector: row => row.units,
         },

        // {
        //     name : 'Seats Total',
        //     type : '',
        //     hide: 'sm',
        //     hide: 'md',
        //     sortable: 'true',
        //     center: 'true',
        //     selector: row => row.seats_total,
        // },
        {
            name : 'Seats available',
            type : '',
            hide: 'sm',
            sortable: 'true',
            center: 'true',
            compact: 'true',
            selector: row => row.seats_available,
        },
        {
            name : 'Instructor',
            type : '',
            hide: 'sm',
            wrap: 'true',
            selector: row => row.instructor,
        },
        {
            name : 'Building',
            type : '',
            hide: 'sm',
            center: 'true',
            selector: row => row.building,
        },
        // {
        //     name : 'Room',
        //     type : '',
        //     selector: row => row.room,
        // },
        {
            name : 'Days',
            type : '',
            sortable: 'true',
            center: 'true',
            selector: row => row.days,
            
        },
        {
            name : 'Start Time',
            type : '',
            hide: 'sm',
            sortable: 'true',
            hide: 'lg',
            center: 'true',
            selector: row => row.start_time,
        },
        {
            name : 'End Time',
            type : '',
            hide: 1200,
            sortable: 'true',
            center: 'true',
            selector: row => row.end_time,
        }
      ]
    const rows = Data.results[0].items;
  return (
    <>
        <div className='table' onClick={handleClick}>
            <h1>{Data.results[0].items[0].class_title}</h1>
            <p>{Data.results[0].items[0].class_ldesc}</p>
            <DataTable
                //className='table'
                columns={columns}
                data={rows}
                sm
                expandableRows
                fixedHeader
                pagination
                compact
                selectableRowsHighlight
                expandableRowsComponent={ExpandedComponent}
            />
        </div>
        <div className='table' onClick={handleClick}>
            <h1>{Data.results[0].items[0].class_title}</h1>
            <p>{Data.results[0].items[0].class_ldesc}</p>
            <DataTable
                //className='table'
                columns={columns}
                data={rows}
                sm
                expandableRows
                fixedHeader
                pagination
                compact
                selectableRowsHighlight
                expandableRowsComponent={ExpandedComponent}
            />
        </div>
    </>
  )
}