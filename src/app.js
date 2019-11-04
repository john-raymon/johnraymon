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
									My name is John Ray, born in Bronx, New York. I am a self-taught web developer, write JavaScript all the time, from front-end frameworks to web application frameworks in Node such as Express. Currently love my job as the front-end engineer at https://Commercejs.com building the future of e-commerce driven by developers and merchants together. Previously worked as a Software Engineer at https://Sanctuary.Computer in Chinatown, New York on Browery. On the side I'm learning Linux, reading Nand to Tetris, teaching myself CS—if not enrolled in undergraduate program before 2019 ends—, building GetVippy.com, and raising my beautiful daughter Nova Rae.
									- if the form below does not work feel free to reach out at John@JohnRaymon.com
								</p>

								<p>
									Github: <a href="https://github.com/john-raymon">https://github.com/john-raymon</a>
									<br/>
									Twitter: <a href="https://twitter.com/onlyjohnray">@OnlyJohnRay</a>
									<br/>
									Instagram: <a href="https://instagram.com/getvippyjohn">@GetVippyJohn</a>
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
	document.getElementById('app')
	)
