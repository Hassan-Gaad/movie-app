import React from 'react'

const Pagination = ({pageNoPluse,pageNoMin,pageNo}) => {
    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item ">
                        <button className="page-link" onClick={()=>{pageNoMin()}}>Previous</button>
                    </li>
                    <li className="page-item"><button className="page-link" onClick={()=>{pageNo(1)}}>1</button></li>
                    <li className="page-item"><button className="page-link"onClick={()=>{pageNo(2)}}>2</button></li>
                    <li className="page-item"><button className="page-link" onClick={()=>{pageNo(3)}}>3</button></li>
                    <li className="page-item">
                        <button className="page-link" onClick={()=>{pageNoPluse()}}>Next</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination
