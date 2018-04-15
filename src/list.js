import React from 'react'
class List extends React.Component {
    render() {
        const numbers = [1, 2, 3, 4, 5, 6]
        const listNumbers = numbers.map((list,index) => <li key={index}>{list}</li>)
        return (
            <ul>
                {listNumbers}
            </ul>
        )
    }
}
export default List