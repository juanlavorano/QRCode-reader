import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { IoIosClose } from "react-icons/io";


export default function CodeReader(props){
  const [reader, setReader] = useState({ delay: 300, result: '' })
  const [scanned, setScanned] = useState(false)
  const [select, setSelect] = useState('yes')
  const [amount, setAmount] = useState()
  const [disabled, setDisabled] = useState(true)
  const [percent, setPercent] = useState(100)

  // Props
  const { visibility } = props
  const { addItem } = props
  const { closeModal } = props
  
  // Handles
  const handleScan = (data) => {
    const result = JSON.parse(data)
    if (data) {
        setReader({
            delay: reader.delay,
            result: result
        });
      setScanned(true)
      console.log(reader)
    }
    }
    
  const handleError = (err) => {
    console.error(err);
  }

  const handleAmount = (e) => {
    setPercent(e.target.value)
    if (select === 'yes') {
      setDisabled(false)
    }
    const itemAmount = reader.result['amount '] + reader.result.vat[0].amount
    const currentPercent = e.target.value
    const total = ((itemAmount * currentPercent) / 100)
    setAmount(total.toFixed(2))
  }

  const handleSelect = (e) => {
    setSelect(e.target.value)
    if (e.target.value === 'yes') {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  const handleRefund = () => {
    const item = {
      sender: reader.result.sender,
      invoice_no: reader.result['invoice _no'],
      description: reader.result.description,
      amount: amount
    }

    if (select === 'yes' && percent <= 100 && percent > 0) {
      addItem(item)
      closeModal()
    }
  }
 
  // Return
    return (
      <div className={`modalShowing-${visibility} fade-in`}>
        {!scanned ?
        <div className='modal-container'>
                <div className='close-button'>
                  <button className='close-button' onClick={() => closeModal()}><IoIosClose size={30}/></button>
                </div>
                <QrReader
                    className='cam'
                    delay={reader.delay}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: "100%" }}
                />
          </div>
          :
          <div className='modal-container modal-container-2'>
            <div className='close-button'>
                  <button className='close-button-2' onClick={() => closeModal()}><IoIosClose size={30}/></button>
            </div>
            <div className='modal-container-2-content'>
            <div className='modal-question'>
            <h3>How you like a refund on this product?</h3>
              <select className='select-css' value={select} onChange={(e) => handleSelect(e)}>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
                </select>
              </div>
              <div className='modal-question'>
                <h3>What % should be refunded?</h3>
                <div>
                  <input onChange={handleAmount} min={1} max={100} className='modal-question-input' type='number'></input>
                  <p>Total (+VAT): € {amount}</p>
                </div>

              </div>
              <div className='modal-container-2-refundBtn'>
                <button type="button" disabled={disabled} className='title-container-button' onClick={() => handleRefund()}>Ask refund</button>
              </div>
            </div>
          </div>
         
        }
      </div>
    );
  }
