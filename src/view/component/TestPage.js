import React,{useContext} from 'react';
import MyContext from '../../context/store/MyContext';
 

function TestPage() {
    const myContext = useContext(MyContext);
    return (
        <div>
            <p>Test{myContext.test[0].name}</p>
        </div>
    )
}

export default TestPage
