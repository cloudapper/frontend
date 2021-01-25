import React, {useState, useEffect} from 'react'
import { findByFin } from '../service/CarDataService'
import CarDataSet from '../components/CarDataSet'
import Carousel from 'react-bootstrap/Carousel'

const CarDataView = () => {
    const fin = "VWVWWFSDH666";
   
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        findByFin(fin).then(res => {
            console.log('res', res)
            setCarData(res.data)
        })
    }, [carData, fin, setCarData ])

    return (
        <>
        <Carousel
        indicators="true"
        >
            {carData.map(carDatum => {
                console.log('carDatum', carDatum)
                return <Carousel.Item><CarDataSet carDataArray={carDatum.data} /><Carousel.Caption><h3>{carDatum.timestamp}</h3></Carousel.Caption></Carousel.Item>
            })}
        </Carousel>
      </>
    )
    
}

export default CarDataView;

{/* <CarDataSet carDataArray={carDatum.data} /> */}