
import {Routes, Route} from 'react-router-dom'
import Layout from './layout';
import './costumer.css'
import Login from './options/login';
import Register from './options/register';




function App() {   

    return(
        <><div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route path="login" element={<Login/>}></Route>
                <Route path="/" element={<Register/>}></Route>                
                </Route>
            </Routes>                         
        </div>
        </>
    );
}



export default App
