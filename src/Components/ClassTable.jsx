import React from 'react'
import DataTable from 'react-data-table-component';
import Data from '../sample-data/partial-data.json';
import './ClassTable.css'

const ExpandedComponent = (section) => 
{
    return(
        //conditional rendering to avoid displaying if the atribute is missing
    <div className='class-info-exp'>
        
        <p onClick={console.log(section[0])}> Jora </p>
        {section.subject_code && <p><span>Subject Code</span>: {section.subject_code}</p>}
        {section.catalog_number && <p>Catalog Number: {section.catalog_number}</p>}
        {section.class_section && <p>Class Section: {section.class_section}</p>}
        {section.course_id && <p>Course ID: {section.course_id}</p>}
        {section.class_title && <p>Class title: {section.class_title}</p>}
        {section.units && <p>Units: {section.units}</p>}
        {section.class_number && <p>Class Number: {section.class_number}</p>}
        {section.component && <p>Component: {section.component}</p>}
        {section.seats_total && <p>Seats Total: {section.seats_total}</p>}
        {section.seats_available && <p>Seats Available: {section.seats_available}</p>}
        {section.instructor && <p>Instructor: {section.instructor}</p>}
        {section.building && <p>Building: {section.building}</p>}
        {section.room && <p>Room: {section.room}</p>}
        {section.days && <p>Days: {section.days}</p>}
        {section.start_time && <p>Start Time: {section.start_time}</p>}
        {section.end_time && <p>End Time: {section.end_time}</p>}
        {section.meeting_number && <p>Meeting Number: {section.meeting_number}</p>}
        {section.session_code && <p>Session Code: {section.session_code}</p>}
        {section.ge_grad_req && <p>GE Grad Req: {section.ge_grad_req}</p>}
        {section.class_meeting_start_date && <p>Class Meeting Start Date: {section.class_meeting_start_date}</p>}
        {section.class_meeting_end_date && <p>Class Meeting End Date: {section.class_meeting_end_date}</p>}
        {section.class_ldesc && <p>Class Description: {section.class_ldesc}
        </p>}
        
    </div>
    )
}


//<pre>{JSON.stringify(Data, null, 2)}</pre>;


export default function ClassTable({section}) {
    //const columns = Data.results[0].columns;
    const handleClick = () =>{
        console.log(section.sections)
      }
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
        // {
        //      name : 'Units',
        //      type : '',
        //      selector: row => row.units,
        //  },

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
    const rows = section.sections;
  return (
    <>
        <div className='table'>
            <h2 onClick={handleClick}>{section.subject_code + " " + section.catalog_number + " - " + section.class_title + " - " +section.units + " Units"}</h2>
            <p>{section.class_ldesc}</p>
            <DataTable
                //className='table'
                columns={columns}
                data={rows}
                sm
                expandableRows
                fixedHeader
                compact
                selectableRowsHighlight
                expandableRowsComponent={() =>ExpandedComponent(section.sections)}
            />
        </div>
    </>
  )
}