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
            background-color: var(--uranian);
        }
        
        
        h1, h2, h3, h4, h5, h6 {
            font-family: Heebo;
        }
        
        p {
            font-family: ProSans;
            font-size:larger;
        }
        /* General element styles end */

        /* Footer element styling */


        .footer-container {
            margin: 0.50rem;
            border-color: white;
            border-style: solid;
            padding: 0.5rem;
        }

        .footer {
            flex-grow: 1;
            display: grid;
            gap: 0.5rem;
            grid-template-columns: repeat( auto-fit , minmax(240px, 1fr));
            justify-content: center;
        }

        .footer-heading {
            background-color: #1446a0;
            padding: 0.25rem;
            gap: 2px;
        }

        .footer-heading ul {
            list-style-type: none;
            list-style-position: inside;
            padding: 0.1rem;
            margin-inline-start: 0px;
            text-align: right;
            gap: 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
        }

        .footer-heading p {
            text-align: center;
        }

        .navlinks {
        }

        .sponsors {
        }

        .social {
            background-color: #1446a0;
            display: grid;
            grid-template-rows: 2fr 1fr;
        }

        .social p{
            text-align: center;
        }

        .social-box{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
        }

        .social-box p {
            flex-grow: 1;
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
        }

        .renervate-logo{
            background-color: #1446a0;
            background-image: url(./footer_elements/teamphoto.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }

        .team-photo {

        }

        .team-photo img{
            
        }

        .icon {

        }

        .icon:hover {
            /* This method need the conversion from here: https://codepen.io/sosuke/pen/Pjoqqp */
            filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
        }

        </style>

<footer>
<div class="footer-container">
        <div class="footer">
            <div class="footer-heading navlinks">   
                    <p>Pages</p>
                <ul>
                <li>    <a href="#" target="_blank">Home                        </a>        </li>
                <li>    <a href="#" target="_blank">Team Members                </a>        </li>
                <li>    <a href="#" target="_blank">Project Description         </a>        </li>
                <li>    <a href="#" target="_blank">Project Design              </a>        </li>
                <li>    <a href="#" target="_blank">Model                       </a>        </li>
                <li>    <a href="#" target="_blank">Parts                       </a>        </li>
                <li>    <a href="#" target="_blank">Proposed Implementation     </a>        </li>
                <li>    <a href="#" target="_blank">Human Practices             </a>        </li>
                <li>    <a href="#" target="_blank">Inclusivity Research        </a>        </li>
                <li>    <a href="#" target="_blank">Science Communication       </a>        </li>
                <li>    <a href="#" target="_blank">Biologix Competition        </a>        </li>
                <li>    <a href="#" target="_blank">Judging Form                </a>        </li>
                </ul>
            </div>
            <div class="footer-heading sponsors">
                    <p>Sponsors</p>
                <ul>
                <li>    <a href="#" target="_blank">King's College London       </a>        </li>
                <li>    <a href="#" target="_blank">Wellcome                    </a>        </li>
                <li>    <a href="#" target="_blank">Promega                     </a>        </li>
                <li>    <a href="#" target="_blank">KCLSU                       </a>        </li>
                <li>    <a href="#" target="_blank">BBSRC                       </a>        </li>
                <li>    <a href="#" target="_blank">SnapGene                    </a>        </li>
                <li>    <a href="#" target="_blank">Benchling                   </a>        </li>
                <li>    <a href="#" target="_blank">BGM Lab Tech                </a>        </li>
                <li>    <a href="#" target="_blank">IDT                         </a>        </li>
                </ul>
            </div>
            <div class="social">
                <a class="renervate-logo" href="#" target="_top"></a>
                
                <div class="social-box">
                    <p>Contact Us</p>
                    <ul>
                        <a href="#" target="_blank"><img class="icon" src="./footer_elements/instagram.svg"></a>                           
                        <a href="#" target="_blank"><img class="icon" src="./footer_elements/twitter.svg"></a>                             
                        <a href="#" target="_blank"><img class="icon" src="./footer_elements/facebook.svg"></a>                            
                        <a href="#" target="_blank"><img class="icon" src="./footer_elements/envelope.svg"></a>
                    </ul>                               
                </div>
            </div>
        </div>
        <img src = "./footer_elements/longlogo.png" width = "100%" height = "auto" />
        

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