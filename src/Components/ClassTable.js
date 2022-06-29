import React from 'react'
import DataTable from 'react-data-table-component';
import uuid from 'react-uuid'
//import Data from '../sample-data/partial-data.json';
import './ClassTable.css'

const ExpandedComponent = (section) => {
    return (
        //conditional rendering to avoid displaying if the atribute is missing
        <div key={uuid()} className='class-info-exp'>
           {section.data.subject_code && <p><span>Subject Code</span>: {section.data.subject_code}</p>}
            {section.data.catalog_number && <p>Catalog Number: {section.data.catalog_number}</p>}
            {section.data.class_section && <p>Class Section: {section.data.class_section}</p>}
            {section.data.course_id && <p>Course ID: {section.data.course_id}</p>}
            {section.data.class_title && <p>Class title: {section.data.class_title}</p>}
            {section.data.units && <p>Units: {section.data.units}</p>}
            {section.data.class_number && <p>Class Number: {section.data.class_number}</p>}
            {section.data.component && <p>Component: {section.data.component}</p>}
            {section.data.seats_total && <p>Seats Total: {section.data.seats_total}</p>}
            {section.data.seats_available && <p>Seats Available: {section.data.seats_available}</p>}
            {section.data.instructor && <p>Instructor: {section.data.instructor}</p>}
            {section.data.building && <p>Building: {section.data.building}</p>}
            {section.data.room && <p>Room: {section.data.room}</p>}
            {section.data.days && <p>Days: {section.data.days}</p>}
            {section.data.start_time && <p>Start Time: {section.data.start_time}</p>}
            {section.data.end_time && <p>End Time: {section.data.end_time}</p>}
            {section.data.meeting_number && <p>Meeting Number: {section.data.meeting_number}</p>}
            {section.data.session_code && <p>Session Code: {section.data.session_code}</p>}
            {section.data.ge_grad_req && <p>GE Grad Req: {section.data.ge_grad_req}</p>}
            {section.data.class_meeting_start_date && <p>Class Meeting Start Date: {section.data.class_meeting_start_date}</p>}
            {section.data.class_meeting_end_date && <p>Class Meeting End Date: {section.data.class_meeting_end_date}</p>}
            {section.data.class_ldesc && <p>Class Description: {section.data.class_ldesc}</p>}
        </div>
    )
}

export default function ClassTable({ section }) {
    const handleClick = () => {
        console.log(section.sections)
    }
    const columns = [
        {
            name: 'Seats available',
            type: '',
            hide: 'sm',
            sortable: 'true',
            center: 'true',
            compact: 'true',
            selector: row => row.seats_available,
        },
        {
            name: 'Instructor',
            type: '',
            hide: 'sm',
            wrap: 'true',
            selector: row => row.instructor,
        },
        {
            name: 'Building',
            type: '',
            hide: 'sm',
            center: 'true',
            selector: row => row.building,
        },
        {
            name: 'Days',
            type: '',
            sortable: 'true',
            center: 'true',
            selector: row => row.days,

        },
        {
            name: 'Start Time',
            type: '',
            hide: 'sm',
            sortable: 'true',
            hide: 'lg',
            center: 'true',
            selector: row => row.start_time,
        },
        {
            name: 'End Time',
            type: '',
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
                <h2 id={section.subject_code + '-' + section.catalog_number} onClick={handleClick}>{section.subject_code + " " + section.catalog_number + " - " + section.class_title + " - " + section.units + " Units"}</h2>
                <p>{section.class_ldesc}</p>
                <DataTable
                    columns={columns}
                    data={rows}
                    sm
                    expandableRows
                    fixedHeader
                    compact
                    selectableRowsHighlight
                    expandableRowsComponent={(e) => ExpandedComponent(e,rows)}
                />
            </div>
        </>
    )
}