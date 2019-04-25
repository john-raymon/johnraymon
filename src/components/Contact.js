import React, { Component } from 'react'

class Contact extends Component {
	render(){
		return(
				<div className="contact-form-wrapper">
					<p> Get in Touch </p>

					{ this.props.messagesent && <p className="message_sent"> Your Message was sent! You should hear back from me pronto.</p> }

					{ this.props.errorsent && <p className="error_sent"> {this.props.errormessage}</p> }
					<form onSubmit={this.props.handleSubmit} >
						<input className="input_email" type="email" name="senderemail" placeholder="Your email" onChange={this.props.handleChange} value={this.props.senderemail}/>
						<input className="input_name" type="text" name="sendername" placeholder="Your name" onChange={this.props.handleChange} value={this.props.sendername} />
						<textarea className="input_message" name="sendermessage" placeholder="Dear John," cols="50" rows="5" onChange={this.props.handleChange} value={this.props.sendermessage}>
							
						</textarea>

						{this.props.isLoading ? <button className="disabled_button" disabled>Loading</button> : <button>Send</button> }

					</form>

				</div>
			)
	}
}

export default Contact;