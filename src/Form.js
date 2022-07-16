import React, { useEffect, useState } from "react";
import classes from "./Form.module.css";

const Form = () => {
	const [name, setName] = useState("");
	const [venue, setVenue] = useState("");
	const [date, setDate] = useState("");
	const [stationary, setStationary] = useState(0);
	const [banner, setBanner] = useState(0);
	const [registration, setRegistartion] = useState(0);
	const [sponsorship, setSponsorship] = useState(0);
	const [food, setFood] = useState(0);
	const [error, setError] = useState("");
	const [valid, setValid] = useState(false);
	const eventNameHandler = (e) => {
		setName(e.target.value);
	};
	const eventVenueHandler = (e) => {
		setVenue(e.target.value);
	};
	const eventDateHandler = (e) => {
		setDate(e.target.value);
	};
	const eventFoodHandler = (e) => {
		setFood(e.target.value);
	};
	const eventStationaryHandler = (e) => {
		setStationary(e.target.value);
	};
	const eventBannerHandler = (e) => {
		setBanner(e.target.value);
	};
	const eventSponsorshipHandler = (e) => {
		setSponsorship(e.target.value);
	};
	const registrationHandler = (e) => {
		setRegistartion(e.target.value);
	};

	const submitForm = (e) => {
		e.preventDefault();
		const notEmpty = [
			name,
			venue,
			date,
			stationary,
			banner,
			registration,
			sponsorship,
			food,
		].every((val) => val);
		if (!notEmpty) {
			setError("Please Fill Every inputs");
			return;
		}

		const isNumber = [
			stationary,
			banner,
			registration,
			sponsorship,
			food,
		].every((val) => typeof val === "number");
		if (!isNumber) {
			setError("Please type number in the fields of Expenses");
			return;
		}
		if (notEmpty && isNumber) {
		}
	};

	return (
		<form onSubmit={submitForm}>
			{error ? <p className={classes.errorMessage}> {error}</p> : ""}
			<div className={classes["event-name"]}>
				<label htmlFor="event-name">Event Name</label>
				<input
					type="text"
					id="event-name"
					onChange={eventNameHandler}
					value={name}
				/>
			</div>
			<div className={classes["event-venue"]}>
				<label htmlFor="event-venue">Event Venue</label>
				<input
					type="text"
					id="event-venue"
					onChange={eventVenueHandler}
					value={venue}
				/>
			</div>
			<div className={classes["event-date"]}>
				<label>Event Date</label>
				<input
					type="date"
					id="event-date"
					onChange={eventDateHandler}
					value={date}
				/>
			</div>
			<h2>Expenses</h2>{" "}
			<div className={classes["extra-inputs"]}>
				<table>
					<tr>
						<th>Payments</th>
						<th>Amounts</th>
						<th>Received</th>
						<th>Amounts</th>
					</tr>
					<tr>
						<td>Food</td>
						<td>
							<input
								type="text"
								id="event-date"
								onChange={eventFoodHandler}
								value={food}
							/>
						</td>
						<td>Sponsorship</td>
						<td>
							<input
								type="text"
								id="event-date"
								onChange={eventSponsorshipHandler}
								value={sponsorship}
							/>
						</td>
					</tr>
					<tr>
						<td>Stationary</td>
						<td>
							<input
								type="text"
								id="event-date"
								onChange={eventStationaryHandler}
								value={stationary}
							/>
						</td>
						<td>Registration</td>
						<td>
							<input
								type="text"
								id="event-date"
								onChange={registrationHandler}
								value={registration}
							/>
						</td>
					</tr>
					<tr>
						<td>Banner</td>
						<td>
							<input
								type="text"
								id="event-date"
								onChange={eventBannerHandler}
								value={banner}
							/>
						</td>
					</tr>
				</table>
				{/* <div className={classes["event-food"]}>
					<label htmlFor="event-food">Food</label>
					<input type="text" id="event-date" onChange={eventNameHandler} />
				</div>
				<div className={classes["event-stationary"]}>
					<label htmlFor="event-name">Stationary</label>
					<input type="text" id="event-name" onChange={eventNameHandler} />
				</div>
				<div className={classes["event-banner"]}>
					<label htmlFor="event-banner">Banner</label>
					<input type="text" id="event-banner" onChange={eventNameHandler} />
				</div> */}
			</div>
			<div>
				<button
					type="submit"
					className={`${valid ? "error" : ""}`}
					disabled={valid ? true : false}
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default Form;
