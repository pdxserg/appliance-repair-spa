import styles from './BookingForm.module.css';
import {useForm} from 'react-hook-form'
import { useState} from "react";

const BookingForm = () => {
	const {
		register,
		handleSubmit,
		setValue,
// watch,
		formState: {errors}
	} = useForm()
	const [isSubmitted, setIsSubmitted] = useState(false);


	// const watchAllField= watch(["firstName"])
	// console.log('itWatch',watchAllField)

	return (
		<section
			id="bookingForm"
			className={`section ${styles.aboutSection}`}>
			<div className="container">
				<h2 className="section-title">Book now</h2>

				<div className={styles.aboutContent}>
					<div>
						<form onSubmit={handleSubmit((data) => {
							console.log(data)
							setIsSubmitted(true)
						})}>

							<input placeholder="First name*"
							       {...register('firstName',
								       {
									       required: "First name is required",
									       maxLength: {
										       value: 15,
										       message: "Your name to long"
									       },
									       minLength: {
										       value: 2,
										       message: "Your name to short"
									       }
								       }
							       )}
							       onChange={(e) => {
								       const cleaned = e.target.value.trim();
								       setValue('firstName', cleaned, {shouldValidate: true});
							       }}
							/>
							<p>{errors.firstName?.message?.toString()}</p>

							<input placeholder="Last name*"
							       {...register('lastName',
								       {
									       required: "Last name is required",
									       maxLength: {
										       value: 15,
										       message: "Your Last name to long"
									       },
									       minLength: {
										       value: 2,
										       message: "Your Last name to short"
									       }
								       }
							       )}
							       onChange={(e) => {
								       const cleaned = e.target.value.trim();
								       setValue('lastName', cleaned, {shouldValidate: true});
							       }}
							/>
							<p>{errors.lastName?.message?.toString()}</p>

							<input type="tel"
							       placeholder="Phone number*"
							       {...register('phoneNumber',
								       {
									       required: 'Phone number is required',
									       minLength: {
										       value: 10,
										       message: 'Phone number must be 10 digits',
									       },
									       maxLength: {
										       value: 10,
										       message: 'Phone number must be 10 digits',
									       },
									       pattern: {
										       value: /^\d+$/,
										       message: 'Only digits allowed',
									       },
								       }
							       )}/>
							<p>{errors.phoneNumber?.message?.toString()}</p>

							<input placeholder="E-mail address*"
							       {...register('emailAddress',
								       {
									       required: 'Email is required',
									       maxLength: {
										       value: 40,
										       message: 'Email incorrect',
									       },
									       pattern: {
										       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										       message: 'Invalid email format',
									       }
								       }
							       )} />
							<p>{errors.emailAddress?.message?.toString()}</p>


							<input placeholder="Street Address*"
							       {...register('streetAddress',
								       {
									       required: 'Address is required',
									       minLength: {
										       value: 2,
										       message: 'Address incorrect',
									       },
									       maxLength: {
										       value: 30,
										       message: 'Address incorrect',
									       },
								       }
							       )} />
							<p>{errors.streetAddress?.message?.toString()}</p>

							<input placeholder="Unit/Apartment/Suit"
							       {...register('unit',
								       {
									       minLength: {
										       value: 1,
										       message: 'Address incorrect',
									       },
									       maxLength: {
										       value: 30,
										       message: 'Address incorrect',
									       },
								       }
							       )} />
							<p>{errors.unit?.message?.toString()}</p>

							<input placeholder="City*"
							       {...register('city',
								       {
									       required: 'Address is required',
									       minLength: {
										       value: 2,
										       message: 'Address incorrect',
									       },
									       maxLength: {
										       value: 15,
										       message: 'Address incorrect',
									       },
								       }
							       )} />
							<p>{errors.city?.message?.toString()}</p>

							<input placeholder="ZIP*"
							       {...register('zip',
								       {
									       required: 'Zip code is required',
									       minLength: {
										       value: 5,
										       message: 'Zip code is incorrect',
									       },
									       maxLength: {
										       value: 5,
										       message: 'Zip code is incorrect',
									       },
									       pattern: {
										       value: /^(98|97)\d{3}$/,
										       message: 'Only digits allowed',
									       },
								       }
							       )} />
							<p>{errors.zip?.message?.toString()}</p>

							<textarea placeholder="Issue + appliance type (e.g. dryer not heating)"
							          {...register('description',
								          {maxLength: 500}
							          )} />
							<br/>
							<label>
								<input style={{width: 30, height: 30}}
								       type="checkbox"
								       {...register('terms', {required: 'You must accept the terms'})}
								/>
								I agree to receive texts. Msg & data rates may apply.
							</label>
							<p>{errors.terms?.message?.toString()}</p>

							<input
								type="submit"
								className={`${styles.submitButton} ${
									isSubmitted
										? styles.green
										: Object.keys(errors).length > 0
											? styles.grey
											: styles.blue
								}`}
								value={isSubmitted ? 'Your data sent successfully' : 'Submit'}
							/>

						</form>

					</div>


				</div>
			</div>
		</section>
	);
};

export default BookingForm;