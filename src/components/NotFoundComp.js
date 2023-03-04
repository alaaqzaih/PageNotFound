import React from 'react'
import '.././components/NotFoundComp.scss'
function NotFoundComp() {
    return (
        <section>
            <div className="containerwrapper">
            <div className="container">
                <div className="textcontent">
                    <div className="text">
                        <h2>Sorry,</h2>
                        <h1 className='lineUp'>404 Page Not <br />Found</h1>
                        <p>We're sorry, that page cannot be found. Please use the <br /> menu above to find what you are looking for.</p>
                        <div className="btn">
                            <a href="" className='btn1'>Home Page</a>
                        </div>
                    </div>
                </div>
                <div className="imagewrapper">
                    <img className='imgAnimation' src='https://hearlifeagain.alpacaaudiology.com/wp-content/themes/alpaca-child/_images/halftone-02.svg' ></img>
                        <img src='https://hearlifeagain.alpacaaudiology.com/wp-content/uploads/sites/16/2021/02/spools-out-660x886.jpg'></img>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default NotFoundComp
