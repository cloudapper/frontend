
import React from 'react'
import Card from 'react-bootstrap/Card'

const CarDataSet = ({carDataArray}) => {
    return (
            <Card bg="dark">
                <Card.Body className="mb-5 pb-5 ml-5 pl-5 text-center">
        {carDataArray.map((datum, index) => {
            return (<span key={index} className="text-white">
                {datum} <br/>
                </span>
                )}
                )}
                </Card.Body>
            </Card>
    )
}

export default CarDataSet;