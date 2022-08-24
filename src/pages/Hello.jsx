import long from '../images/LongArrow.svg'
import short from '../images/ShortArrow.svg'

const Hello = ()=> {
    return (
        <section className="black" id="Welcome">
            <header>
                <div className="container">
                <h1 className='typed' id="Hello">
                <span  className="red">&#60;</span>Hello
                </h1>
                </div>
            </header>

            <main className='textShowing'>
                <div className="flex-div">
                    <h2 className="red">
                    
                        &#60;Computer Science Student
                        <br />
                    
                    </h2>
                    <p><span className="red">
                    location = </span>&quot;Houston, Texas&quot;</p>
                
                    <p><span className="red">description =</span> &quot;I am CS freshman at Rice University who loves all things Software Engineering.&quot; <span className="red">/&#62;</span></p>
                    <img className="ShortArrow" src={short} alt=""/>
                    <img className="LongArrow" src={long} alt="arrow" />
                </div>
                
            </main>

        </section>
    )
}

export default Hello