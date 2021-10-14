import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Mailjet from 'mailjet';
import Hero from './components/Hero'
import NutritionFacts from './components/NutritionFacts'
import Contact from './components/Contact'
import './../style/mainstyling.css'
import './../style/normalize.css'

import * as EmailValidator from 'email-validator';

emailjs.init(ENV.EMAIL_JS_USER_ID);
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sendername: "",
      senderemail: "",
      sendermessage: "",
      messagesent: false,
      errorsent: false,
      errormessage: '',
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.throwThisError = this.throwThisError.bind(this);

  }

  throwThisError(error){
    this.setState({isLoading: false})
    switch(error) {
        case "email":
            this.setState({
              errorsent: true,
              errormessage: 'The email you entered is invalid.'
            })
            break;
        case "empty":
            this.setState({
              errorsent: true,
              errormessage: 'Oops, please make sure you fill in all the fields.'
            })
            break;
        default:
            this.setState({
              errorsent: true,
              errormessage: 'There seems to be some sort of error, please refresh the page and try again.'
            })
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      messagesent: false
    });
    console.log(e.target.name + ': and ' + e.target.value );

  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({isLoading: true})
    if (!this.state.senderemail.trim() || !this.state.sendername.trim() || !this.state.sendermessage.trim()) {
      return this.throwThisError('empty')
    } else {
      if (EmailValidator.validate(this.state.senderemail)) {
        let _this = this; // change
        // send email here
        emailjs.send("default_service","portfolio_get_in_touch",{
          name: this.state.sendername,
          message_html: this.state.sendermessage,
          sender: this.state.senderemail
        })
        .then(
          function(response) {
            console.log("SUCCESS", response);
            _this.setState({
              sendername: "",
            senderemail: "",
            sendermessage: "",
            errorsent: false,
            errormessage: '',
            messagesent: true,
            isLoading: false
            });
          },
          function(error) {
            return _this.throwThisError();
          }
        );


      } else {
        return this.throwThisError('email');
      }
    }

  }



  render() {
    return (
        <div>
          <Hero />
          <div className="about-wrapper-parent">
            <div className="about-section-wrapper">

              <div className="nutrition-table-outer-container">
                <NutritionFacts />

              </div>

              <div className="about-text-container">
                <p>
                  <span className="about-a-note">
                    As of lately...
                  </span>
                  &emsp; My name is John Ray, I was born in The Bronx, and lived for sometime in Orlando, FL (where I'm currently based). 
                  I'm a 23 year old girl dad of a smart three year old toddler, Nova Rae, and also a self-taught web developer. I enjoy learning about and writing JavaScript using Vue.js/React.js, from front-end frameworks/libraries to web application frameworks in Node such as Express. 
                  <br />
                  <br />
                  &emsp; I recently worked as a front-end developer at Commercejs.com, an e-commerce tech. start-up, where I worked at from July 2019-August 2020; I resigned to build a virtual debit card platform (<a href="https://kickstarter.com/projects/642080622/split-virtual-debit-cards">https://kickstarter.com/projects/642080622/split-virtual-debit-cards</a>). 
                  After failing to launch that project I then tried and failed at launching onlyinsta.com (<a href="https://www.producthunt.com/posts/onlyinsta-beta">https://www.producthunt.com/posts/onlyinsta-beta</a>). 
                  <br />
                  <br />
                  &emsp; Before working at Commercejs.com, I landed my first full-time web developer role in August 2018, at <a href="https://Sanctuary.Computer">https://Sanctuary.Computer</a> in Chinatown, New York on Bowery, where I worked at up until February 2019. 
                  On the side I'm learning more JavaScript by reading "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language", learning Elixir & Phoenix, and trying to learn some Computer Science fundamentals by following https://teachyourselfcs.com/. 
									Lately I've been working on a new tech interviewing web app (a side-project), looking for a new front-end developer role, and most importantly raising my daughter Nova Rae.
                  <br/>
                  <br/>
                  Most recently I built and designed <a href="https://hirerunner.com">Hirerunner.com</a> for <a href="https://twitter.com/ArlanWasHere">Arlan Hamilton</a>; I worked on a custom checkout flow using Stripe.js that can be seen <a href="https://hirerunner.com/company-on-board">here</a>.
                  <br/>
                  <br/>
                  If the form below does not work feel free to reach out at John@JohnRaymon.com.
                  <br></br>
                  <br></br>
                  P.S. The graphic art in the hero was designed by me in 2015 is a purchasable NFT (<a href="https://rarible.com/token/0x60f80121c31a0d46b5279700f9df786054aa5ee5:168609?tab=details">https://rarible.com/token/0x60f80121c31a0d46b5279700f9df786054aa5ee5:168609</a>). Also, the "Nutrition Facts" was created back in 2017, when I coded up this one-page site using React.js, please don't judge me for the bad CSS used and for choosing React.js for a one-page site, <strong>as the decisions were made early in my career 😂</strong>.
                </p>


                <p>
                  Github: <a href="https://github.com/john-raymon">https://github.com/john-raymon</a>
                  <br/>
                  Twitter: <a href="https://twitter.com/johnraymonm">@JohnRaymonm</a>
                  <br/>
                  Instagram: <a href="https://instagram.com/johnraymon.me">@JohnRaymon.me (currently deactivated)</a>
                </p>
              </div>

            </div>
          </div>

          <Contact
            sendername={this.state.sendername}
            senderemail={this.state.senderemail}
            sendermessage={this.state.sendermessage}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            messagesent={this.state.messagesent}
            errorsent = {this.state.errorsent}
            errormessage = {this.state.errormessage}
            isLoading={this.state.isLoading}
          />


        </div>

      )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById("app")
  )
