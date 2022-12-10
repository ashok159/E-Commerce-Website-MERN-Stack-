import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React, { Component } from 'react'
import axios from "axios";

function CategoryPage() {
    const { category } = useParams();
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`/searchcategory/${category}`).then((response) => {
            console.log(category)
          console.log(response.data.products[0].title);
          setList(response.data.products[0].title);
        });
      }, []);


    return(
        <div>
            <h1>{list}</h1> 
            {/* render the first item title in the arr */}
            
            {
                // console.log(list[0])
            }
        </div>
    )
}



export default CategoryPage;



