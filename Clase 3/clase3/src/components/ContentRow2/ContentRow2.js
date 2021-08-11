import React from 'react';
import LastProducts from '../LastProducts/LastProducts';
import Categories from '../Categories/Categories';

export default function ContentRow2(){
    return(
        <div className = "row">
            <LastProducts/>
            <Categories/>
        </div>
    )
}