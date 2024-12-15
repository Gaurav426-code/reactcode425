import React,{Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Myfunc from'./Myjsxfile.jsx';
import Mymuipage from './Mymuipage.js';
import App from './App.js';


function Myoldpage(){
return(
    <Fragment>
    <Myfunc></Myfunc>
    <Mymuipage></Mymuipage>
    </Fragment>
)
}

export default Myoldpage;
