const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `

        <style>

            /* Fonts added Heebo- variable; ProSans - normal, bold, italic*/
            @font-face {
                font-family: Heebo;
                src: url(./fonts/Heebo-VariableFont_wght.ttf);}
    
    
            :root {
                
                font-family: Heebo;
                overflow-wrap: break-word;

                /* Defining the 2021 colors in the root as variables*/
    

                /* Downward definitions */

                --pear: #cde43a ;
                --seagreen: #58bc82 ;
                --prussian: #13293d;
                --uranian: #c4e3fd;
                --dodger: #4895ef;
                --cobalt: #1446a0;


                /* Upward definitions*/

                 /* This filter method need the conversion from here: https://codepen.io/sosuke/pen/Pjoqqp */

                --link-normal: white;
                --link-visited: white;
                --link-hover: var(--pear);
                --footer-container-background: var(--prussian);
                --link-list-background: var(--prussian);
                --link-text-background:var(--prussian);
                --link-header-color: #ecf1f5;;
                --link-hover-change:var(--dodger);
                --icon-color-change: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
                --social-icon-border-color: white;
                --social-icon-color: invert(100%) sepia(0%) saturate(7500%) hue-rotate(178deg) brightness(108%) contrast(101%);
                --social-icon-hover-color: invert(63%) sepia(49%) saturate(374%) hue-rotate(92deg) brightness(92%) contrast(96%);
                --sponsor-icon-color: none;
                --sponsor-icon-hover: none;

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
                font-family: Heebo;
                font-size:larger;
            }

            footer {
                position: relative;
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
    
            a:link {color:var(--link-normal);text-decoration:none;}
            a:visited {color:var(--link-visited);text-decoration:none;}
            a:hover {color: var(--link-hover);text-decoration:underline;}
    
    
            /* General element styles end */
    
            /* Footer element styling */
    
            .footer-container {
                background-color: var(--footer-container-background);
            }
    
            .link-multiple{
                padding-top: 2vw;
                gap: 0.5rem;
                justify-content: space-around;
                align-items: baseline;
                display:grid;
                grid-template-columns: 15vw 25vw 20vw;
                grid-auto-rows: auto;
            }


            /* Link list element styling */
    
    
            .link-list {
                background-color: var(--link-list-background);
            }
    
    
            .link-header {
                color: var(--link-header-color);
                font-size: 2vw;
                margin-bottom: 0.5vw;
            }

            .link-list ul {
                list-style-type: none;
                list-style-position: inside;
                padding: 0.05rem;
                margin-inline-start: 3vw;
                text-align: left;
                gap: 0.2rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
            }
    
            #link-text {
                background-color: var(--link-text-background);
                font-size: 1.5vw;
            }
    
            #link-text:hover > #link-icon {
                /* This filter method need the conversion from here: https://codepen.io/sosuke/pen/Pjoqqp */
                filter: var(--icon-color-change);
            }
    
    

            /* Social styling */

            .longlogo  {
                margin: 0px;
                border: 0px;
                padding: 0px;
                width: 45vw;
                font-family: Heebo-Thin, Heebo;

            }

            .icon {
                width: 2.25vw;
                height: 2.25vw;
                filter: var(--social-icon-color);
                border-style: none;
                border-color: var(--social-icon-border-color);
                padding: 0.3vw;
                border-width: 0.1vw;
            }

            .icon:hover {
                /* This filter method need the conversion from here: https://codepen.io/sosuke/pen/Pjoqqp */
                filter: var(--social-icon-hover-color);
                border-style: dashed;
            }



            .social-box{
                padding-top: 3vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
            }


            .social-box ul {
                flex-grow: 4;
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 1vw;
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
                width: auto;
                height: 4vw;
            }

            .sponsor-icon {
                /* This filter method need the conversion from here: https://codepen.io/sosuke/pen/Pjoqqp */
                filter: var(--sponsor-icon-color);
            }

            .sponsor-icon:hover {
                /* This filter method need the conversion from here: https://codepen.io/sosuke/pen/Pjoqqp */
                filter: var(--sponsor-icon-hover);
            }
        
            .divider {
                width: 100vw;
                height: 3vw;
            }
            
        </style>

<footer>

<div class="footer-container">


    
    <div class="link-multiple">


        <div class="link-list small-text-column">
            <ul>
                <h3 class="link-header">Project</h3>
                <li class="" id="link-text">
                    <a href="" class="link-page"> Description </a> 
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Design </a> 
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Model </a> 
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Parts </a> 
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Judging Form </a> 
                </li>
    
            </ul>
        </div>

        <div class="link-list">
            <ul>
                <h3 class="link-header">Human Practices</h3>
                <li class="" id="link-text">
                    <a href="" class="link-page"> Integrated Human Practices </a> 
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Entrepreneurship </a> 
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Inclusivity Research </a> 
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Biologix Competition </a> 
                </li>
    
            </ul>
        </div>


        <div class="link-list">
            <ul>
                <h3 class="link-header"> Team </h3>
                <li class="" id="link-text">
                    <a href="" class="link-page"> Members </a> 
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Attributions </a> 
                </li>
    
                <li id="link-text">
                    <a href="" class="link-page"> Collaborations </a> 
                </li>
    
            </ul>
        </div>


    </div>

    <div class="social-box">
        <ul>
    <li>        <a href = "#" target = "_top"><img src="./footer_elements/longlogo.svg" class="longlogo" /></a>
    <li style = "font-size: 3vw; color: white; padding-right:0.5vw;">|</li>
    <li>        <a href="#" target="_blank"><img class="icon" src="./footer_elements/instagram.svg">    </a> </li>                           
    <li>        <a href="#" target="_blank"><img class="icon" src="./footer_elements/twitter.svg">      </a> </li>                             
    <li>        <a href="#" target="_blank"><img class="icon" src="./footer_elements/facebook.svg">     </a> </li>                            
    <li>        <a href="#" target="_blank"><img class="icon" src="./footer_elements/envelope.svg">     </a> </li>
        </ul>                               
    </div>


    <img src="./footer_elements/gradient_line.png" alt="gradient_line" class="divider">


    <div class="sponsor">
        <ul>
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./sponsors/kcl.png"  alt="King's College London"   />   </a> </li>                           
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./sponsors/wellcome.png"  alt="Wellcome"   />   </a> </li>                             
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./sponsors/Promega_Logo-2.png"  alt="Promega"   />   </a> </li>                            
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./sponsors/kclsu_logo.png"  alt="KCLSU"   />   </a> </li>
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./sponsors/BBSRC_Ewan_appointment_EBI_780x400-2.jpg"  alt="BBSRC"   />   </a> </li>
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./sponsors/Snapgene_logo.png"  alt="SnapGene"   />   </a> </li>
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./sponsors/Benchling-Preview.png"  alt="Benchling"   />   </a> </li>
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./sponsors/bmg-labtech_0-2.jpg"  alt="BMG Lab Tech"   />   </a> </li>
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./sponsors/idt-logo-thumb-800.png"  alt="IDT"   />   </a> </li>
    <li>        <a href="#" target="_blank"><img class="sponsor-icon" src="./sponsors/NEB_Logo.jpg"  alt="New England Biolabs"   />   </a> </li>
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