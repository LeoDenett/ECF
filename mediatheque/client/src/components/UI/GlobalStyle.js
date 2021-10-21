import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle= createGlobalStyle`
//Pages Principal Body
.Body {
    display: flex;
    min-height: calc(100vh - 260px);
    background-color: white;
    padding: 0;
    @media (max-width: 3000px) {
                margin: 80px;
            }
    @media (max-width: 1200px) {
                margin: 40px;
            }
    @media (max-width: 768px) {
                margin: 10px;
            }
}
.Mp-0 {
    margin: 0;
    padding: 0;
    border-radius: 0;
    border: 0;
}
.Center {
    display: flex;
    justify-content: center;
    align-items: center;
}

//Header
.Header-Container {
    background-color: black;
    padding: 0;
    display: flex;
    align-items: center;
}
a.navbar-brand {
    margin: 0;
    padding: 0;
}
.Button-Toggle {
    margin: 0;
    padding: 0;
    border: solid 1px white;
}
button.navbar-toggler {
    background-color: #7ACBCD;
    border-radius: 25px;
    opacity: 1;
    padding: 0;
    margin: 0;
    margin-right: 15px;
    @media (min-width: 800px) {
                margin-right: 30px;
            }
}
span.navbar-toggler-icon {
    background-color: transparent;
    color: black;
    opacity: 1;
    border: solid 1px white;
    border-radius: 25px;
}
.Logo {
    height: 120px;
    width: 120px;
    border-radius: 100%;
    margin-left: 80px;
    margin-top: 4px;
    margin-bottom: 4px;
        @media (max-width: 1024px) {
                margin-left: 30px;
            }
        @media (max-width: 600px) {
                display: none;
            }
}
.Logo-Title {
    color: #7ACBCD;
    display: inline-flex;
    margin: 0;
    padding: 0;
    font-size: 34px;
    @media (max-width: 1700px) {
            position: relative;
            top: 8px;
            }
    @media (max-width: 600px) {
                font-size: 28px;
                margin-left: 15px;
                position: relative;
                top: 0px;
            }
    @media (max-width: 375px) {
                font-size: 24px;
                text-align: center;
                margin-left: 15px;
            }
    @media (max-width: 312px) {
                font-size: 18px;
            }
}
.navbar-collapse {
    background-color: transparent;
    justify-content: end;
    margin-right: 80px;
    @media (max-width: 1024px) {
                margin-right: 30px;
            }
}
.Nav  a{
    text-decoration: none;
    color: white;
    font-weight: 500;
    @media (min-width: 991px) {
                color: #7ACBCD;
            }
}
#navbarScroll {
    text-align: center;
}
.Link-Collapse {
    @media (max-width: 991px) {
                border: solid 2px white;
                padding: 8px;
                background-color: #7ACBCD;
                margin-bottom: 10px;
                margin-left: 25px;
                border-radius: 25px;
            }
}
.Link-Collapse :hover{
    @media (min-width: 768px) and (max-width: 991px) {
                transition: 0.5s;
                margin-left: 30px;
            }
}
.Sign-UpLink {
    margin: 0;
    margin-top: 5px;
    color: white;
}
.Button-Ok {
    border: solid 2px #7ACBCD;
    background-color: black;
    padding: 5px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.5s;
}
.Button-Ok:hover {
    transition: 0.5s;
    margin-left: 20px;
    padding: 8px;
    border: solid 2px white;
    color: black;
    background-color: #7ACBCD;
    padding: 5px;
    border-radius: 25px;
    cursor: pointer;
}
.Button-Count {
    border: solid 2px #7ACBCD;
    background-color: black;
    padding: 5px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s;
    color: white;
    text-decoration: none;
}
.Button-Count:hover{
    transition: 0.3s;
    border: solid 2px white;
    color: black;
    background-color: #7ACBCD;
    padding: 5px;
    border-radius: 25px;
    cursor: pointer;
}
.Button-Count:focus{
    transition: 0.3s;
    border: solid 2px white;
    color: black;
    background-color: #7ACBCD;
    padding: 5px;
    border-radius: 25px;
    cursor: pointer;
}
.modal-content {
    color: #7ACBCD;
    background-color: black;
    border: solid 2px #7ACBCD;
}
.modal-header {
}

//Page Accueil
.Accueil-Covid {
    display: flex;
    align-items: center;
    height: 350px;
    margin: 0px;
    margin-bottom: 10px;
    padding: 0px;
    gap: 0;
    @media (min-width: 768px) {
                margin-bottom: 20px;
            }
}
.Card-CovidXl {
    display: none;
    border-radius: 0;
    @media (min-width: 913px) {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
}
.TextCovid {
    color: black;
    font-size: 24px;
    line-height: 30px;
    font-weight: bold;
    margin-left: 20px;
    margin-right: 20px;
}
.Card-CovidXs {
    display: flex;
    padding: 0;
    margin: 0;
    max-height: 350px;
    @media (min-width: 913px) {
                display: none;
            }
    @media (max-width: 913px) {
                color: black;
                font-weight: 500;
                max-height: 350px;
    }
}
.BodyCovid {
    margin: 0;
    max-height: 120px;
    border: 0px;
    padding: 0;
}
.Accueil-Info {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: black;
    height: 710px;
    margin: 0;
    padding: 0;
    @media (min-width: 1024px) {
                padding: 20px;
            }
    @media (min-width: 768px) {
                height: 720px;
            }
    @media (min-width: 600px) and (max-width: 1024px) {
                padding: 10px;
            }
}
.Titles-Info {
    margin-top: 10px;
    @media (max-width: 1700px) {
                font-size: 22px;
            }
    @media (max-width: 800px) {
                font-size: 18px;
            }
    @media (max-width: 425px) {
                font-size: 16px;
                margin-top: 10px;
            }
}
.Paragraph-Info {
    @media (max-width: 1700px) {
                font-size: 18px;
            }
    @media (max-width: 800px) {
                font-size: 16px;
            }
    @media (max-width: 425px) {
                font-size: 14px;
            }
    @media (max-width: 375px) {
                font-size: 12px;
            }
}
.Info-Containers {
    background-color: #7ACBCD;
    border: solid 2px white;
    border-radius: 10px;
    height: 200px;
    margin-bottom: 30px;
    margin-top: 25px;
    @media (min-width: 1024px) {
                border-radius: 30px;
            }
}
.Accueil-InfoContainer {
    padding: 0;
    margin: 0;
    margin-left: 10px;
    @media (min-width: 768px) {
                margin-left: 20px;
            }
}
.Accueil-Catalogue {
    display: flex;
    align-items: center;
    background-color: black;
    height: 350px;
    margin: 0;
    padding: 0;
    gap: 0;
}

//Page Catalogue
.Catalogue-Container {
    padding: 10px;
    width: 100%;
    @media (min-width: 576px) {
                padding: 20px;
                margin: 0;
            }
    @media (max-width: 475px) {
                padding: 0;
                margin: 0;
            }
}
.Catalogue-Img {
    margin: 0;
    padding: 0;
    @media (max-width: 475px) {
            min-width: 250px;
        }
}
.Img-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
}
.Img-overlay :hover {
    transition: 0.3s;
    background-color: black;
    opacity: 0.6;
    text-align: center;
}
.Catalogue-In {
    margin: 0;
    padding: 0;
    font-size: 20px;
    color: #7ACBCD;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media (max-width: 475px) {
                display: none;
            }
}
.Catalogue-Titles {
    background-color: black;
    border-radius: 25px;
    padding: 10px;
    color: white;
    display: none;
    align-items: center;
    text-align: center;
    @media (max-width: 475px) {
                opacity: 0.7;
                display: flex;
            }
}
.Docu {
    @media (max-width: 475px) {
        min-width: 200px;
            }
}
.Docu-xl {
    @media (min-width: 767px) and (max-width: 895px) {
            display: block;
            }

}
.Bolder {
    font-weight: bold;
}
.main-image {
  background: url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 80vh;
  position: relative;
  background-attachment: fixed;
}
.filter:after {
  background-color: rgba(0, 0, 0, 0.4);
  content: '';
  display: block;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
}
.card-title {
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

//Page Info
.Info-Title {
    color: #7ACBCD;
    @media (min-width: 1024px) {
                font-size: large;
                font-weight: 600;
                font-size: 28px;
            }
}
.Info-P {
    @media (min-width: 1024px) {
                font-size: large;
                font-weight: 500;
            }
}

//Page Contact
.BodyContact {
    display: flex;
    min-height: calc(100vh - 260px);
    background-color: white;
    padding: 0;
    @media (max-width: 3000px) {
                margin: 80px;
            }
    @media (max-width: 1200px) {
                margin: 40px;
            }
    @media (max-width: 768px) {
                margin: 30px;
                margin-top: 50px;
            }
}
.ContactXs {
    min-height: 430px;
    display: flex;
    border: solid 2px #7ACBCD;
    margin-bottom: 50px;
    @media (min-width: 920px) {
                display: none;
            }
    @media (max-width: 425px) {
                border: solid 4px #7ACBCD;
            }
}
.Contact-Icon {
    display: flex;
    margin-bottom: 50px;
    @media (min-width: 920px) {
                display: none;
            }
}
.ContactXl {
    display: none;
    max-height: 750px;
    @media (min-width: 921px) {
                display: flex;
            }
}
.Contact-Img {
    max-height: 750px;
    opacity: 0.5;
}
.Contact-Title {
    text-align: center;
    margin: 80px;
    font-size: 34px;
}
.Contact-P {
    text-align: center;
    margin: 80px;
    font-size: 20px;
    font-weight: 500;
}

//Page Sign In
.SignIn {
    height: 720px;
    background-color: black;
    margin: 10px;
    @media (max-width: 3000px) {
                margin: 80px;
            }
    @media (max-width: 1200px) {
                margin: 40px;
            }
    @media (max-width: 768px) {
                margin: 10px;
            }
}
.Error {
    color: red;
}
.Title-Si {
    margin-bottom: 40px;
}
.Margin {
    margin-bottom: 25px;
    display: block;
}
.Margin-e {
    margin-top: -20px;
    margin-bottom: 20px;
}
.Logo-Count {
    height: 120px;
    width: 120px;
    border-radius: 100%;
    margin: auto;
}
label {
    color: #7ACBCD;
    font-size: 1.2em;
    font-weight: 400;
}
.form-group {
    margin-bottom: 2rem;
}
.error {
    border: 2px solid #FF6565;
}
.error-message {
    color: #FF6565;
    padding: .5em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
}
.Bt-ct {
    position: relative;
    top: 25px;
    @media (max-width: 425px) {
            text-align: center;
                margin-top: 75px;
                display: block;
        }
}
.d-bot {
    position: relative;
    top: 25px;
    left: 25px;
    @media (max-width: 425px) {
        position: relative;
        left: 120px;
        top: 40px;
        }
    @media (max-width: 375px) {
        position: relative;
        left: 100px;
        top: 40px;
        }
    @media (max-width: 320px) {
        position: relative;
        left: 70px;
        top: 35px;
        }
}

//Sign up
.labelform{
     
    color: #7ACBCD;
    font-size: 1.2em;
    font-weight: 400;
  
}

//Footer
.Footer {
    width: 100%;
    height: 130px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #7ACBCD;
    border-top: solid 2px #7ACBCD;
    @media (max-width: 600px) {
                height: 100px;
            }
}
`;

export default GlobalStyle