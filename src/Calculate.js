import React,{useState} from 'react';
import './Calculate.css';


var list1= [];
var list2= [];
var list3= [];
var list4= [];
var list5= [];
var n=1, x=0;
var  total_credits=null, total_rates=null,avrg=0,temp=0,check=1;
var selectedcredit=null, selectedgrade=null,coursename="";


function Calculate() {
  const [coursenamestate, setCourseNameState] = useState("")
  const [gradestate, setGradeState] = useState(null)
  const [creditstate, setCreditState] = useState(null)
  const [averagestate, setAverageState] = useState(null)

    return (
      <div>
        <div className="left"></div>
            <div className="middle">
                  <div className="inputdiv">
                        <div className="tdhead">
                        course
                        </div>
                        <div className="thead">
                        <input  className='inp'   type='text'   name='age'    placeholder='e.g. Course1'          onChange={ (event) => {
          			            coursename=event.target.value;
          			            setCourseNameState(coursename)
          			          }
          			          }
          			        />
                        </div>
                      <hr/>
                        <div className="tdhead">credits</div>
                        <div className="thead">
                        <input
                          className='inp'
            		          type='text'
            		          name='age'
            		          onChange={ (event) => {
            		            selectedcredit=event.target.value;
            		            setCreditState(selectedcredit)
            		          }
            		          }
            		        />
                        </div>
                        <div className="tdhead">grade</div>
                        <div className="thead">
                            <select className="gradeselect" id="lettergrade" onChange={(e)=>{
                		          selectedgrade=e.target.value;
                		          setGradeState(selectedgrade)
                		          }
                		        }  >
                		          <option name='grade' value="0">-</option>
                		          <option name='grade' value="4">AA</option>
                		          <option name='grade' value="3.5">BA</option>
                		          <option name='grade' value="3">BB</option>
                		          <option name='grade' value="2.5">CB</option>
                		          <option name='grade' value="2">CC</option>
                		          <option name='grade' value="1.5">DC</option>
                		          <option name='grade' value="1">DD</option>
                		          <option name='grade' value="0.5">FD</option>
                		          <option name='grade' value="0">FF</option>
                		        </select>
                        </div>


                      <button type= 'button' id='add-btn' name="add-btn" className="btn" onClick={ (event) => {
                  if(coursenamestate!=="" && gradestate !==null && creditstate!== null ){
                            if(isNaN(creditstate)){
                              alert(" Credits must be a number!!!")
                            }

                            else{
                                var AddRow = document.getElementById('show');
                                var NewRow = AddRow.insertRow(n);

                                list1[x]=n;
                                list2[x]=coursenamestate;
                                list5[x]=parseFloat(gradestate);

                                switch (list5[x]) {
                                    case 4:     list3[x] = "AA";      break;
                                    case 3.5:   list3[x] = "BA";      break;
                                    case 3:     list3[x] = "BB";      break;
                                    case 2.5:   list3[x] = "CB";      break;
                                    case 2:     list3[x] = "CC";      break;
                                    case 1.5:   list3[x] = "DC";      break;
                                    case 1:     list3[x] = "DD";      break;
                                    case 0.5:   list3[x] = "FD";      break;
                                    case 0:     list3[x] = "FF";      break;
                                    default:    list3[x] = "None";       break;
                                  }
                                list4[x]=parseInt(creditstate);

                                var cel1 = NewRow.insertCell(0);
                                var cel2 = NewRow.insertCell(1);
                                var cel3 = NewRow.insertCell(2);
                                var cel4 = NewRow.insertCell(3);

                                cel1.innerHTML = list1[x];
                                cel2.innerHTML = list2[x];
                                cel3.innerHTML = list3[x];
                                cel4.innerHTML = list4[x];

                                n++;
                                x++;
                              }
                        }
                  else{
                    alert("No information!!!")
                  }
                  }
                }>add</button>

                <button type='button' id='calculate-btn' className="btn" name="add-btn"   onClick={ (event) => {
                  if(list1.length !== 0 && list2.length !== 0 && list3.length !== 0 && list4.length !== 0){
                    if(Boolean(check)){

                            var i,j;
                              for (i = 0; i < list4.length; i++) {
                                total_credits += list4[i];
                              }
                              for (j = 0; j < list4.length; j++) {
                                temp=list4[j]*list5[j];
                                total_rates += temp;
                                temp=0;
                              }
                              avrg=total_rates/total_credits;
                            setAverageState(avrg)
                            check=0;
                            }
                            else{
                              alert("Please, clear the informations!")
                            }
                    }
              else{
                alert("No information!!!")
              }
                }
              } >Calculate</button>

                <button type= 'button' className='btn' id='clear-btn' name="clear-btn"  onClick={() => window.location.reload(false) }>Clear !</button>
                <p>Total credits are :  {total_credits}</p>
                <p>Your current GPA  is :  {averagestate}</p>


                  </div>

                  <div>
                    <table className="tbl-inputs"id='show'>
                       <tr>
                         <th className="row-inputs">№</th>
                         <th className="row-inputs">Course Code : </th>
                         <th className="row-inputs">Grade : </th>
                         <th className="row-inputs">Credits : </th>
                       </tr>
                    </table>
                  </div>

            </div>
        <div className="right"></div>
      </div>
    );
}


export default Calculate;
