import Image from "next/image"


const Hello = ()=> {
    return (
        <section className="black" id="Welcome">
            <header>
                <h1 id="Hello">
                <span  className="red">&#60;</span>Hello
                </h1>
                </header>
                <main>
                    <div className="flex-div">
                    <h2 className="red">
                
                &#60;Full-Stack Developer
                <br />
                
            </h2>
            <p><span className="red">
            location = </span>&quot;Miami, Florida&quot;</p>
            
            <p><span className="red">description =</span> &quot;I am a self-taught full-stack web developer who works as a freelancer, mainly with Django in the back-end and Nextjs in the front-end. I love  building everything custom: having fun implementing every feature and creating the most reliable, scalable, and personalized solutions out of my customers’ needs.&quot; <span className="red">/&#62;</span></p>
       <Image className="ShortArrow" src="/ShortArrow.svg" height="54" alt="arrow" width="54"/>
        <Image className="LongArrow" src="/LongArrow.svg" alt="arrow" width="50" height="100"/>
                    </div>
                
           </main>

        </section>
    )
}

export default Hello