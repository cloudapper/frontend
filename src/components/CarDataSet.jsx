
import React from 'react'
import Card from 'react-bootstrap/Card'

const CarDataSet = ({carDataArray}) => {
    return (
            <Card>
                <Card.Body className="m-2">
                    {carDataArray.map((datum, index) => {
                        return (<span key={index}>
                {datum} <br/>
                </span>
                )}
                )}
                </Card.Body>
            </Card>
    )
}

export default CarDataSet;