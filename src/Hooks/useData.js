import React, { useEffect, useState } from 'react';

const useData = (url) => {
    const [datas, setDatas]= useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[url])
    return datas;
};

export default useData;