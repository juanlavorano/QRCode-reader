import React, {useState} from 'react'
import InvoiceItem from './InvoiceItem'
import CodeReader from './CodeReader'

export default function Overview() {
    const [invoice, setInvoice] = useState([])
    const [showModal, setShowModal] = useState(false)

    const handleClick = (e) => {
        setInvoice([...invoice, e])
    }

    const handleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div>
            <div className='title-container'>
            <h1 className='tite-container-text'>Overview</h1>
            {/* Add invoice button */}
                <button className='title-container-button' onClick={() => handleModal()}>Add invoice</button>
            </div>

            {/* Display invoices */}
            <div className='item-display'>
                <div className='subs-container'>
                        <h3 className='sub desc'>Product</h3>
                        <h3 className='sub sender'>Sender</h3>
                        <h3 className='sub date'>Date</h3>
                        <h3 className='sub status'>Status</h3>
                    <button className='invoice-btn sub-btn'>info</button>
            </div>
            <ul style={{listStyle: 'none'}}>
                {
                    invoice.map((i) => {
                        return <InvoiceItem key={i['invoice _no']} item={i} />
                    })
                }
            </ul>
            </div>
            
            {/* Display Cam Modal to scan the QR Code */}
            {!showModal 
                ?
                <div style={{visibility: 'hidden'}} />
                :
                <CodeReader closeModal={() => setShowModal(false)} visibility={showModal} addItem={(result) => handleClick(result)}/>
            }
        </div>
    )
}
