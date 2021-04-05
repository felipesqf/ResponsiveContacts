// import React from "react";
// import "./style.css";

// function SearchResults(props) {
//   return (
//     <table>
//       <tr>
//           <th>
//           Name
//           </th>
//           <th>Phone</th>
//           <th>Email</th>
//           <th>Company</th>
//       </tr>
//       {props.results.map(result => (
//       <tr>
//         <td>
//           <span>{result.name}</span>
//         </td>
//         <td>
//           <span>{result.phone}</span>
//         </td>
//         <td>
//           <span>{result.email}</span>
//         </td>
//         <td>
//           <span>{result.company.name}</span>
//         </td>
//       </tr>
//       ))}
//     </table>
//   );
// }

// export default SearchResults;


/////////////////////////////////////////////////////////////////////////////

import React from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Table } from 'antd';


function SearchResults(props) {
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Company',
    dataIndex: 'company',
    sorter: (a, b) => a.company.length - b.company.length,
    sortDirections: ['descend', 'ascend'],
  },
];

const data = 
props.results.map(result => (
 {
    key: result.id,
    name: result.name,
    phone: result.phone,
    email: result.email,
    company: result.company.name,
  }
));
console.log(data)

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
return (
  <Table columns={columns} dataSource={data} onChange={onChange} />
);
}

export default SearchResults;



///////////////////////////////////////////////////////////////////////
