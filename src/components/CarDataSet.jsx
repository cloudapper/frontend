
import React from 'react'
import Card from 'react-bootstrap/Card'

const CarDataSet = ({carDataArray}) => {
    return (
            <Card bg="dark">
                <Card.Body>
        {carDataArray.map(datum => {
            return (<>
                {datum} <br/>
                </>
                )}
                )}
                </Card.Body>
            </Card>
    )
}

export default CarDataSet;