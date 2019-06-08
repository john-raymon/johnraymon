import React,{ Component } from 'react';

class NutritionFacts extends Component {

	render() {
		return(

			<div className='nutrition-facts-outer-container'>
				<div className='nutrition-facts-inner-wrapper'>

					<div className="nutrition-title-container">
						<p>Nutrition Facts</p>
					</div>
					<div className="nutrition-serving-size-container">
						<p>Serving Size 1 Project (100g)</p>
					</div>

					<div className="thickline-1"></div>

					<div className="nutrition-amount-per-serving-contianer">
						<p>Amount Per Serving</p>
					</div>

					<div className="thinline-1"></div>

					<div className="nutrition-calories-container">
						<p>Calories <span className='soften-number'>999</span></p>
					</div>

					<div className="thickline-2"></div>

					<div className="nutrition-daily-values">
						<p>% Daily Values* </p>
					</div>

					<div className="thinline-1"></div>

					<div className="nutrition-type-container">
						<p>
							<span className="type-name-span">
								Total Effort
							</span>
							<span className="type-percentage-span">
								1000%
							</span>
						</p>
					</div>

					<div className="thinline-1"></div>

					<div className="nutrition-type-container">
						<p>
							<span className="type-name-span">
								Creativity
							</span>
							<span className="type-percentage-span">
								500%
							</span>
						</p>
					</div>

					<div className="thinline-1"></div>

					<div className="nutrition-type-container">
						<p>
							<span className="type-name-span">
								Coding
							</span>
							<span className="type-percentage-span">
								500%
							</span>
						</p>
						<div className="nutrition-inner-type-wrapper">
							<div className="thinline-1"></div>
							<div className="nutrition-inner-type-container">
								<p>
									<span className="type-name-span">
										HTML/CSS
									</span>
									<span className="type-percentage-span">
										300%
									</span>
								</p>
							</div>
							<div className="nutrition-inner-type-container">
								<p>
									<span className="type-name-span">
										SASS (with BEM)
									</span>
									<span className="type-percentage-span">
										300%
									</span>
								</p>
							</div>
							<div className="thinline-1"></div>
							<div className="nutrition-inner-type-container">
								<p>
									<span className="type-name-span">
										React JS
									</span>
									<span className="type-percentage-span">
										300%
									</span>
								</p>
							</div>
							<div className="thinline-1"></div>
							<div className="nutrition-inner-type-container">
								<p>
									<span className="type-name-span">
										Redux
									</span>
									<span className="type-percentage-span">
										300%
									</span>
								</p>
							</div>
							<div className="thinline-1"></div>
							<div className="nutrition-inner-type-container">
								<p>
									<span className="type-name-span">
										Node.js
									</span>
									<span className="type-percentage-span">
										300%
									</span>
								</p>
							</div>
							<div className="thinline-1"></div>
							<div className="nutrition-inner-type-container">
								<p>
									<span className="type-name-span">
										Express.js
									</span>
									<span className="type-percentage-span">
										300%
									</span>
								</p>
							</div>
							<div className="thinline-1"></div>
							<div className="nutrition-inner-type-container">
								<p>
									<span className="type-name-span">
										Javascript ES2015 (ES6)
									</span>
									<span className="type-percentage-span">
										300%
									</span>
								</p>
							</div>
						</div>
					</div>

					<div className="thinline-1"></div>

					<div className="nutrition-type-container">
						<p>
							<span className="type-name-span">
								Design
							</span>
							<span className="type-percentage-span">
								299%
							</span>
						</p>
						<div className="nutrition-inner-type-wrapper">
							<div className="nutrition-inner-type-container">
								<div className="thinline-1"></div>
								<p>
									<span className="type-name-span">
										Photoshop CC
									</span>
									<span className="type-percentage-span">
										300%
									</span>
								</p>
							</div>
							<div className="nutrition-inner-type-container">
								<div className="thinline-1"></div>
								<p>
									<span className="type-name-span">
										Sketch
									</span>
									<span className="type-percentage-span">
										300%
									</span>
								</p>
							</div>
						</div>
					</div>

					<div className="thickline-1"></div>

					<div className="nutrition-end-label">
						<p>* Percent Daily Values are based on skill sets obtained</p>
					</div>






				</div>
			</div>

		)
	}
}

export default NutritionFacts;
