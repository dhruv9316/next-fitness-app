"use client";

import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import styles from './TrialForm.module.css'
import ButtonLoading from "@/components/Loader/ButtonLoading";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    city: ""
  })
  const {name, email, date, city} = formData
  const [isBooking, setIsBooking] = useState(false)

  const handleChange = (e) => {
    const formDataClone = {...formData}
    formDataClone[e.target.name] = e.target.value
    setFormData(formDataClone)
  }

  const handleSubmit = async() => {
    console.log("reaching handleSubmit")
    if (!name && !email && !date  && !city) {
    // if ( (!name || name.length === 0) && (!email || email.length === 0) && (!date || date.toString().length === 0) && (!city || city.length === 0) ) {
      toast.error("Please fill all required fields")
      return;
    }

    console.log("reaching 1111111111")

    setIsBooking(true)
    try {
      const response = await axios.post('https://backend-fitness-app-dhruv9316.vercel.app/v1/book-trial', formData)

      console.log("response of trial-booking api => ", response)

      if (response.status === 200) {
        toast.success("Trial Booked Successfully!")
      }

    } catch (err) {
      console.log("error in booking trial api", err)
      toast.error(err.response.data.message || "Error while booking trial")
    }
    setIsBooking(false)
  }

  return (
    <div>
      <main className={styles.container}>
        <h4>Book a Free Trial</h4>

        <div className={styles.form_input_wrapper}>
          <label htmlFor="name">Name</label>
          <div className={styles.form_input}>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="name"
              value={formData.name}
              id="name"
              placeholder="Enter Your Name"
            />
          </div>

          <label htmlFor="email">Email</label>
          <div className={styles.form_input}>
            <input
              type="email"
              onChange={(e) => handleChange(e)}
              name="email"
              value={formData.email}
              id="email"
              placeholder="Enter Your Email"
            />
          </div>

          <label htmlFor="address[0].city">City</label>
          <div className={styles.form_input}>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="city"
              value={formData.city}
              id="city"
              placeholder="Enter the City name"
            />
          </div>

          <label htmlFor="date">Date</label>
          <div className={styles.form_input}>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={(e) => handleChange(e)}
              id="date"
              placeholder="Select Date"
            />
          </div>

          <button
            className={styles.button_submit}
            onClick={handleSubmit}
            // disabled = {
            //   !formData.name && !formData.email && !formData.city && !formData.date
            // }
          >
            {isBooking ? <ButtonLoading /> : "Submit"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default page;
