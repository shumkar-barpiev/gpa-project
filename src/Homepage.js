import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div>
      <h2> Grading Scale of Kyrgyz-Turkish Manas University:</h2>
        <div className='main'>
      <table className="center" >
 <tr>
   <th clasName= "row">Letter Grade</th>
   <th clasName= "row">Percent-Grade</th>
     <th clasName= "row">4.0 Scale</th>
 </tr>
 <tr>
   <td className="column">AA</td>
   <td className="column">90-100</td>
     <td className="column">4.0</td>
 </tr>
 <tr>
   <td className="column">BA</td>
   <td className="column">85-89</td>
     <td className="column">3.5</td>
 </tr>
         <tr>
   <td className="column">BB</td>
   <td className="column">80-84</td>
     <td className="column">3.0</td>
 </tr>
         <tr>
   <td className="column">CB</td>
   <td className="column">75-79</td>
     <td className="column">2.5</td>
 </tr>
         <tr>
   <td className="column">CC</td>
   <td className="column">70-74</td>
     <td className="column">2.0</td>
 </tr >
         <tr>
   <td className="column">DC</td>
   <td className="column">65-69</td>
     <td className="column">1.5</td>
 </tr>
         <tr>
   <td className="column">DD</td>
   <td className="column">60-64</td>
     <td className="column">1.0</td>
 </tr>
         <tr>
   <td className="column">FD</td>
   <td className="column">50-59</td>
     <td className="column">0.5</td>
 </tr>
         <tr>
   <td className="column">FF</td>
   <td className="column">49 and below</td>
     <td className="column">0.0</td>
 </tr>
</table>
</div>
<div className="slidediv">

</div>
    </div>
  );
}

export default Homepage;
