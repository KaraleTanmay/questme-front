import React, { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import GetStarted from './components/GetStarted'
import QnA from './components/QnA'

export default function App() {

    const [homePage, setHomePage] = useState(true)

    return (
        <div className='changefont'>
            <Navbar />
            {
                homePage && <GetStarted setpage={setHomePage} />
            }
            {
                !homePage && <QnA setpage={setHomePage} />
            }
            <Footer />
        </div>
    )
}
