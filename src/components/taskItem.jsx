import React from 'react'

const taskItem = ({ item }) => {
    return (
        <div className='flex justify-between'>
            <div>{item.id}-{item.title}</div>
            <button className=''>Delete</button>
        </div>
    )
}

export default taskItem
