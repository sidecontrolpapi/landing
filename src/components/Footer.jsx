
const Footer = () => {
    return(
        <div className="Footer">
            
            <div className="PersonalInfo">
                <p>Adrián Valdés Díaz</p>
                <p href="#">/</p>
                <a href="#AboutMe">About Me</a>
                <a href="#Projects">Projects</a>
                <a href="#Contact">Contact</a>
            </div>
            
            <div className="Networks">
                <svg className="RightArr" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 74.295 43.686">
                    <g id="Group_10" data-name="Group 10" transform="translate(-1682.851 1142.899) rotate(-90)">
                    <path id="Path_1" data-name="Path 1" d="M1100.981,1160.387l20.075,20.075,20.075-20.075" transform="translate(0 573.148)" fill="none" stroke="white" stroke-width="5"/>
                    <path id="Path_2" data-name="Path 2" d="M1145.328,1116.822v70.76" transform="translate(-24.272 566.029)" fill="none" stroke="white" stroke-width="5"/>
                    </g>
                </svg>
                
                <a href="https://www.linkedin.com/in/adri%C3%A1n-vald%C3%A9s-d%C3%ADaz-2a10491b7/">
                    <svg className="linkNet" xmlns="http://www.w3.org/2000/svg" width="38" height="37.92" viewBox="0 0 38 37.92">
                        <g id="Capa_2" data-name="Capa 2" transform="translate(0 -0.05)">
                        <g id="Capa_1" data-name="Capa 1" transform="translate(0 0.05)">
                        <rect id="Rectangle_13" data-name="Rectangle 13" width="7.846" height="25.328" transform="translate(0.751 12.592)" fill="white"/>
                        <path id="Path_3" data-name="Path 3" d="M4.634,9.318A4.634,4.634,0,1,0,0,4.695,4.65,4.65,0,0,0,4.634,9.318Z" transform="translate(0 -0.05)" fill="white"/>
                        <path id="Path_4" data-name="Path 4" d="M16.031,20.232c0-3.564,1.6-5.689,4.794-5.689,2.892,0,4.283,2.045,4.283,5.689v13.3h7.8V17.548c0-6.775-3.851-10.067-9.22-10.067a8.853,8.853,0,0,0-7.638,4.187V8.2H8.52V33.527h7.511Z" transform="translate(5.095 4.393)" fill="white"/>
                        </g>
                        </g>
                    </svg>
                </a>

                <a href="https://github.com/adiazx14">
                    <svg className="linkNet" xmlns="http://www.w3.org/2000/svg" width="38.463" height="37.502" viewBox="0 0 38.463 37.502">
                        <path id="GitHub-Logo.wine" d="M18.983,0A18.6,18.6,0,0,0,0,18.921,19.442,19.442,0,0,0,13.144,37.47c.993.178,1.342-.434,1.342-.938,0-.481-.023-3.133-.023-4.761,0,0-5.428,1.163-6.568-2.311,0,0-.884-2.257-2.156-2.838,0,0-1.776-1.217.124-1.194a4.093,4.093,0,0,1,2.993,2,4.1,4.1,0,0,0,5.653,1.621,4.31,4.31,0,0,1,1.241-2.613c-4.335-.481-8.708-1.109-8.708-8.569A5.877,5.877,0,0,1,8.871,13.3a7.327,7.327,0,0,1,.2-5.265c1.621-.5,5.351,2.094,5.351,2.094a18.32,18.32,0,0,1,9.74,0s3.73-2.606,5.351-2.094a7.323,7.323,0,0,1,.2,5.265,6.028,6.028,0,0,1,2,4.567c0,7.483-4.567,8.08-8.9,8.569a4.586,4.586,0,0,1,1.318,3.6c0,2.613-.023,5.847-.023,6.483,0,.5.357,1.117,1.342.938A19.263,19.263,0,0,0,38.463,18.921C38.463,8.166,29.739,0,18.983,0Z" fill="white"/>
                    </svg>
                </a> 
            </div>
            
            <div className="Bye">
                <h1 id="Hello" className="white">
                <span  className="white">&#47;</span>Bye<span className="red">&#62;</span>
                </h1>
            </div>
        
            <p className="signature">Adrián Valdés Diaz 2021  &copy;</p>
            
        </div>
    )
}
export default Footer;