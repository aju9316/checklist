import React from 'react';

export default class Form extends React.Component {
	render() {
		return (
			<div className='row'>
				<div className='col-offset-lg-4 col-lg-4 col-offset-lg-4'>
					<div className='form-group'>
						<label>Project Name</label>
						<select className='form-control'>
							<option>ZenContent</option>
							<option>vCloud</option>
						</select>
					</div>
				</div>
				<div className='col-offset-lg-4 col-lg-4 col-offset-lg-4'>
					<div className='form-group'>
						<label>Project Email</label>
						<input type='email' className="form-control" />
					</div>
				</div>
				<div className='col-offset-lg-4 col-lg-4 col-offset-lg-4'>
					<div className='form-group'>
						<label>Project URL</label>
						<input type='url' className="form-control" />
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-lg-4'>
					<div className='form-group'>
						<label>Your Name</label>
						<input type='text' className="form-control" />
					</div>
				</div>
				<div className='col-lg-4'>
					<div className='form-group'>
						<label>Your Email</label>
						<input type='email' className="form-control" />
					</div>
				</div>
			</div>
		);
	}
}