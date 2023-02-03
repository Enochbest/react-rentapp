import React from 'react';
import style from './Search.module.css'
function Search() {
    return(
         <input type="text" placeholder={'请输入地区'} className={style.inputbox}/>
    )
}

export default Search;