
import {Routes, Route} from 'react-router-dom'
import Layout from './layout';
import Login from './options/login';
import Register from './options/register';
import Tasks from './tasks/tasks';




function App() {   

    return(
            <div className="vh-100 bg-light">
                <Routes>          
                    <Route path="/" element={<Layout/>}>
                    <Route path="login" element={<Login/>}></Route>
                    <Route path="/" element={<Register/>}></Route> 
                    <Route path="tasks" element={<Tasks/>}></Route>  
                    </Route>
                </Routes>                                       
            </div>
      
    );
}



export default App
