import React from 'react'

const List = (props) => {
//     const items=[
//         { id:1,name:"apple", calorie:95},
//     {id:2,name:"orange", calorie:123},
//     {id:3,name:"pineapple", calorie:50},
//     {id:4,name:"bananas", calorie:44},
//     {id:5,name:"jackitem", calorie:32},
//     {id:6,name:"papaya", calorie:10}
// ]
//     const lessCalorie=items.filter(item=>item.calorie<100)
//     const listitems=lessCalorie.map(item=><li key={item.id}>Name:{item.name} Calories:{item.calorie}</li>)
        const itemlist=props.items;
        
        const listitems=itemlist.map(item=><li key={item.id}>Name:{item.name} Calories:{item.calorie}</li>)
  return (
    <ol>
        {listitems}
    </ol>
  )
}

export default List