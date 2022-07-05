export const COLUMNS = [//this is an array of objects
    //each column is represented by an object in this array
    {
        Header: 'Judge',//we need a way to associate each column with the rows of data, for that we need to specify the accessor property for each column
        accessor: 'Judge'
    },

    {
        Header: 'Branch',
        accessor: 'Branch'

    },
    
    {
        Header: 'Deputy_Clerk',
        accessor: 'Deputy_Clerk'
    },

    {
        Header: 'Room',
        accessor: 'Room'
    },

    {
        Header: 'Office_Phone',
        accessor: 'Office_Phone'
    },
];