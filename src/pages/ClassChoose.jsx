import React from 'react';
import Navbar from "../components/Navbar";
import '../styles/class-choose.css'
import ClassItem from "../components/ClassItem/ClassItem";
function ClassChoose() {
    const classes = ['1' , '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

    return (
        <div>
            <Navbar/>
            <div className='class-choose'>
                <b className='class-choose__title'>
                    Выберите нужный вам номер класса
                </b>
                <div className='class-choose__classes'>
                    {
                        classes.map(itemText =>
                            <ClassItem
                                key={itemText}
                                onClick={() => console.log(12)}
                            >
                                {itemText}
                            </ClassItem>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ClassChoose;