import React, {useState, useEffect} from 'react'
import { findByFinLastXMinutes } from '../service/CarDataService'
import CarDataSet from '../components/CarDataSet'
import Dropdown from 'react-bootstrap/Dropdown'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { getFin } from '../service/AccountService'


const CarDataView = () => {
   
    const [carData, setCarData] = useState([]);
    const [minutes, setMinutes] = useState(10);

    useEffect(() => {
        findByFinLastXMinutes(getFin(), minutes).then(res => {
            setCarData(res.data);
        })
    }, [setCarData, minutes])

    return (
        <>
        <Dropdown className="m-2">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {"Daten der letzten " + minutes + " Minuten"}
            </Dropdown.Toggle>

            <Dropdown.Menu >
                <Dropdown.Item onSelect={() => setMinutes(2)}>2 Minuten</Dropdown.Item>
                <Dropdown.Item onSelect={() => setMinutes(4)}>4 Minuten</Dropdown.Item>
                <Dropdown.Item onSelect={() => setMinutes(10)}>10 Minuten</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Tabs defaultActiveKey="0" transition={false}>
            { 
            carData.map((carDatum, index) => {
                return (<Tab title={new Date(carDatum.timestamp + 'Z').toUTCString()} key={carDatum.fin + index} eventKey={index} > 
                            <CarDataSet carDataArray={carDatum.data} />
                        </Tab>)
            })}
            <Tab>

            </Tab>
        </Tabs>
      </>
    )
    
}

export default CarDataView;
