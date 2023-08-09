import React from 'react';
import {Link} from 'react-router-dom'
import cl from '../ClassItem/ClassItem.module.css'

function ClassItem({children, onClick}) {
    return (
        <a
            className={cl.classItem}
            onClick={onClick}
        >
            {children}
        </a>
    );
}

export default ClassItem;