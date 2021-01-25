import React, {useState, useEffect} from 'react'
import { findByFin } from '../service/CarDataService'
import CarDataSet from '../components/CarDataSet'
import Carousel from 'react-bootstrap/Carousel'

const CarDataView = () => {
    const fin = "VWVWWFSDH666";
   
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        findByFin(fin).then(res => {
            setCarData(res.data)
        })
    }, [ fin, setCarData ])

    return (
        <>
        <Carousel>
            {carData.map((carDatum, index) => {
                return <Carousel.Item key={carDatum.fin + index}><Carousel.Caption><h3>{new Date(carDatum.timestamp + 'Z').toUTCString()}</h3></Carousel.Caption><CarDataSet carDataArray={carDatum.data} /></Carousel.Item>
            })}
        </Carousel>
      </>
    )
    
}

export default CarDataView;
