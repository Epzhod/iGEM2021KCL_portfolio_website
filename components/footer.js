const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `

        <style>

            /* Fonts added Heebo- variable; ProSans - normal, bold, italic*/
            @font-face {
                font-family: Heebo;
                src: url(./fonts/Heebo-VariableFont_wght.ttf);}
    
            @font-face {
                font-family: ProSans;
                src: url(./fonts/SourceSansPro-Regular.ttf)
            }
    
            :root {
                
                /* Defining the 2021 colors in the root as variables*/
    
                --pear: #cde43a ;
                --seagreen: #58bc82 ;
                --prussian: #13293d;
                --uranian: #c4e3fd;
                --dodger: #4895ef;
                --cobalt: #1446a0;
            }
    
            /* General element styles begin */
            
            body {
                margin: 0px;
                border: 0px;
                padding: 0px;
            }
            
            
            h1, h2, h3, h4, h5, h6 {
                font-family: Heebo;
                margin: 0px;
                border: 0px;
                padding: 0px;
            }
            
            p {
                font-family: ProSans;
                font-size:larger;
            }

            footer {
                position: absolute;
                left: 0px;
                bottom: 0px;
            }

            div {
                margin: 0px;
                border: 0px;
                padding: 0px;
            }

            ul {
                margin: 0px;
                border: 0px;
                padding: 0px;
            }

            li {
                margin: 0px;
                border: 0px;
                padding: 0px;
            }
    
            a:link {color:var(--pear);text-decoration:none;}
            a:visited {color:var(--pear);text-decoration:none;}
            a:hover {color: var(--dodger) ;text-decoration:underline;}
    
    
            /* General element styles end */
    
            /* Footer element styling */
    
            .footer-container {
                background-color: var(--prussian);
                display: grid;
                grid-template-rows: repeat( auto-fit , 1fr);
                grid-template-columns: 100vw;
            }
    
            .link-multiple{
                grid-row: span 6;
                display: grid;
                gap: 0.5rem;
                grid-template-columns: repeat( auto-fit , minmax(240px, 1fr));
                justify-content: space-evenly;
            }


            /* Link list element styling */
    
    
            .link-list {
                background-color: var(--prussian);
            }
    
    
            .link-header {
                color: var(--uranian);
                margin-bottom: 10px;
                margin-top:10px;
            }

            .link-list ul {
                list-style-type: none;
                list-style-position: inside;
                padding: 0.05rem;
                margin-inline-start: 0px;
                text-align: center;
                gap: 0.2rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
            }
    
            #link-text {
                background-color: var(--prussian);
            }
    
            #link-text:hover > #link-icon {
                /* This filter method need the conversion from here: https://codepen.io/sosuke/pen/Pjoqqp */
                filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
            }
    
    

            /* Social styling */

            .longlogo  {
                margin: 0px;
                border: 0px;
                padding: 0px;

                
                width: 33vw;

            }

            .icon {
                width: 20px;
                height: 20px;
                filter: invert(62%) sepia(26%) saturate(710%) hue-rotate(92deg) brightness(99%) contrast(92%);
                border-style: solid;
                border-color: var(--dodger);
                padding: 0.3rem;
                border-width: 0.1rem;
            }

            .icon:hover {
                /* This filter method need the conversion from here: https://codepen.io/sosuke/pen/Pjoqqp */
                filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
                border-style: dashed;
            }



            .social-box{
                padding-top: 15px;
                grid-row: span 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
            }


            .social-box ul {
                flex-grow: 4;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-content: center;
                list-style-type: none;
                list-style-position: inside;
                padding: 0.1rem;
                margin-inline-start: 0px;
                text-align: center;
                align-items: center;
            }
        


            /* Sponsor Styling */
            
            .sponsor{
                grid-row: span 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                margin-top: 0.75rem;
                margin-bottom: 0.5rem;
            }


            .sponsor ul {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-content: center;
                list-style-type: none;
                list-style-position: inside;
                padding: 0.1rem;
                margin-inline-start: 0px;
                text-align: center;
            }

            .sponsor-icon {
                width: 40px;
                height: 40px;
            }

            .sponsor-icon:hover {
                /* This filter method need the conversion from here: https://codepen.io/sosuke/pen/Pjoqqp */
                filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
            }
        
            
        </style>
    


<footer>

<div class="footer-container">


    
    <div class="link-multiple">


        <div class="link-list">
            <ul>
                <h3 class="link-header">Links List</h3>
                <li class="" id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
            </ul>
        </div>

        <div class="link-list">
            <ul>
                <h3 class="link-header">Links List</h3>
                <li class="" id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
            </ul>
        </div>

        <div class="link-list">
            <ul>
                <h3 class="link-header">Links List</h3>
                <li class="" id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
            </ul>
        </div>

        <div class="link-list">
            <ul>
                <h3 class="link-header">Links List</h3>
                <li class="" id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
            </ul>
        </div>

        <div class="link-list">
            <ul>
                <h3 class="link-header">Links List</h3>
                <li class="" id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Link # </a><img src="./footer_elements/arrow-up-right-circle.svg" alt="->" id="link-icon">
                </li>
    
            </ul>
        </div>


    </div>


    <div class="social-box">
        <ul>
    <li>        <a href = "#" target = "_top"><img src="./footer_elements/longlogo.png" class="longlogo" /></a>
    <li>        <a href="#" target="_blank"><img class="icon" src="./footer_elements/instagram.svg">    </a> </li>                           
    <li>        <a href="#" target="_blank"><img class="icon" src="./footer_elements/twitter.svg">      </a> </li>                             
    <li>        <a href="#" target="_blank"><img class="icon" src="./footer_elements/facebook.svg">     </a> </li>                            
    <li>        <a href="#" target="_blank"><img class="icon" src="./footer_elements/envelope.svg">     </a> </li>
        </ul>                               
    </div>



    <div class="sponsor">
        <ul>
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./footer_elements/arrow-up-right-circle.svg"  alt="King's College London"   />   </a> </li>                           
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./footer_elements/arrow-up-right-circle.svg"  alt="Wellcome"   />   </a> </li>                             
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./footer_elements/arrow-up-right-circle.svg"  alt="Promega"   />   </a> </li>                            
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./footer_elements/arrow-up-right-circle.svg"  alt="KCLSU"   />   </a> </li>
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./footer_elements/arrow-up-right-circle.svg"  alt="BBSRC"   />   </a> </li>
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./footer_elements/arrow-up-right-circle.svg"  alt="SnapGene"   />   </a> </li>
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./footer_elements/arrow-up-right-circle.svg"  alt="Benchling"   />   </a> </li>
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./footer_elements/arrow-up-right-circle.svg"  alt="BGM Lab Tech"   />   </a> </li>
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./footer_elements/arrow-up-right-circle.svg"  alt="IDT"   />   </a> </li>
        </ul>                               
    </div>



</div>

</footer>

`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);