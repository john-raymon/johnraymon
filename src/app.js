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
										A NOTE <span className='side-text-title'>(from year ago, <a href="#update">update below</a>)</span>
									</span>
									Welcome to my portfolio, my personal website, my work of art. My name is John Raymon, and I'm a creative web designer/developer. Whether you ended up here by coincidence or were sent by a job application/email/business card of mine, I hope I can satisfy you and ultimately impress you. Although the site is fairly static it was fully developed using React JS, a library I’ve been heavily learning at the time of writing this. Above, there is a nutrition label displaying my skills sets I currently obtain, which I plan to make bigger as I perpetually update it as I learn more.



								</p>

								<p id="update">
									<span className="about-a-note">
									An Update: 08//03//2018
									</span>

									I now have obtained over a year of React.js experience; I have combined React with Redux. I have learned the power of methods Redux offers and the ease it brings when combining it with middewares such as Redux-Thunk.
									I used to get headaches last year trying to handle asynchronous calls with just setState. However,
									here is a link to my <a href="https://drive.google.com/file/d/19z-SLBvBlx9xE52WxSpjZOZVzHV6afG9/view?usp=sharing">updated resume.</a>

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
