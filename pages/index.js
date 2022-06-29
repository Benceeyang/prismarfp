import React, {useMemo} from "react";
// import {useTable} from "react-table";
// import {COLUMNS} from "../componentsJudgeColumns"

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/Judge");
  const Judge = await res.json();
  return {
    props: { Judge },
  };
};

export default function Judge({ListofCourtOfficials}) {
const columns = useMemo(() => columns, []); 
console.log(columns);
const data = useMemo (() => ListofCourtOfficials, []);
console.log(data);

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
}    = useTable({
    columns,
    data
})

return(
  <div className={styles.table}>
      <table style={{width: "100%"}} {...getTableProps()}>
  <thead>
      {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
          </tr>    
      ))}
      <tr style={{}}>
          <th style={{}}></th>
      </tr>
  </thead>
  <tbody {...getTableBodyProps()}>
      {rows.map((row) => {
          prepareRow(row)
          return (
              <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  })}
              </tr>
          )
      })}
      <tr>
          <td style={{}}></td>
      </tr>
  </tbody>
</table>
</div>
)
}; 