import React from 'react'
import MUIDataTables from 'mui-datatables'


export default function CustomTableComponents(props) {
    const option={
        filterType:'checkbox'
    }
// const usersList=[{name:"nir",age:"35",email:"nir@gmail.com"},{name:"yakov",age:"30",email:"yakov@gmail.com"}]

const {title,columns,data}=props;


    return (
        <div>
            <MUIDataTables 

            title={title}
            columns={columns}
            data={data}
            options={option}
            />
        </div>
    )
}