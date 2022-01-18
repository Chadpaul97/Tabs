import React, { useState } from 'react'

const Tabs = (props) => {
    const [tab, setTab] = useState( {
        content : ['I am tab 1', "I am tab Number 2", "I am tab Number 3, and the last tab YAY"],
        clickedTab: '',
    })

    const changeTab = () => {
        
    }


    return (
        <div className='container p-4'>
            <div className='d-flex m-3'>
                <div className='container border border-white m-2 h3' onClick={changeTab}>Tab 1</div>
                <div className='container border border-white m-2 h3' onClick={changeTab}>Tab 2</div>
                <div className='container border border-white m-2 h3' onClick={changeTab}>Tab 3</div>
            </div>
            <div>
                <div>
                    <div className='container border border-secondary'>
                        <h2>TAB CONTENT</h2>
                        <h2>{}</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tabs