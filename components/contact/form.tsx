"use client"
import { useState, useEffect } from "react";
export default function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastNmae] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [firstRendor, setFirstRendor] = useState(true);

    useEffect(() => {
        if(firstRendor){
            setFirstRendor(false);
            return;
        }
        firstName ? setFirstNameError(false) : setFirstNameError(true)
    }, [firstName]);

    useEffect(() => {
        if(firstRendor){
            setFirstRendor(false);
            return;
        }
        lastName ? setLastNameError(false) : setLastNameError(true)
    }, [lastName]);

    useEffect(() => {
        if(firstRendor){
            setFirstRendor(false);
            return;
        }
        phoneNumber ? setPhoneNumberError(false) : setPhoneNumberError(true)
    }, [phoneNumber]);

    useEffect(() => {
        if(firstRendor){
            setFirstRendor(false);
            return;
        }
        email ? setEmailError(false) : setEmailError(true)
    }, [email])



    function HandelSubmit() {
        event?.preventDefault();
        if (firstName && lastName && email && phoneNumber) {
            setLoading(true);

            const formData = {
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                email: email,
                message: message,

            }
            console.log(formData)
            setTimeout(() => {
                setLoading(false);
                ResetForm();
            }, 2000)
        }
    }

    function ResetForm() {

        setFirstName("");
        setLastNmae("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");
    }

    return (
        <>
            <div className="max-w-[500px] border  ">
                <form className="w-full flex flex-col bg-[#e6e0f4] pt-6 pb-6 items-center gap-3.5 " onSubmit={HandelSubmit}>
                    <div className="text-3xl font-bold text-[#A526B6] underline">Get In Touch</div>
                    <div className="flex flex-col">
                        <label htmlFor="first_name" className=" text-2xl pr-6">First Name:</label>

                        <input type="text" name="first-name" id="first_name" value={firstName} className="border border-[#b7b6b6] outline-none w-[300px] text-[#696666] " onInput={(e) => { setFirstName(e.target.value) }}></input>
                        {
                            firstNameError ? <p className="text-red-600 text-sm">First Nmae is required</p> : ""
                        }
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="last_name" className=" text-2xl pr-6">Last Name:</label>
                        <input type="text" name="last-name" id="last_name" value={lastName} className="border border-[#b7b6b6] outline-none w-[300px] text-[#696666] " onInput={(e) => { setLastNmae(e.target.value) }}></input>
                        {
                            lastNameError ? <p className="text-red-600 text-sm">Last Name is required</p> : ""
                        }
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone_number" className=" text-2xl pr-6">Phone Number:</label>
                        <input type="tel" name="phoneNumber" id="phone_number" value={phoneNumber} className="border border-[#b7b6b6] outline-none w-[300px] text-[#696666] " onInput={(e) => { setPhoneNumber(e.target.value) }}></input>
                        {
                            phoneNumberError ? <p className="text-red-600 text-sm">Phone Number is required</p> : ""
                        }
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className=" text-2xl pr-6">Email:</label>
                        <input type="email" name="email" id="email" value={email} className="border border-[#b7b6b6] outline-none w-[300px] text-[#696666] " onInput={(e) => { setEmail(e.target.value) }}></input>
                        {
                            emailError ? <p className="text-red-600 text-sm">Email is required</p> : ""
                        }
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="message" className=" text-2xl pr-6">Message:</label>
                        <textarea name="message" id="message" value={message} className="border border-[#b7b6b6] outline-none w-[300px] text-[#696666] " onInput={(e) => { setMessage(e.target.value) }}></textarea>

                    </div>
                    <div className="w-[250px] pt-3">
                        {loading ?
                            <button className="p-2 rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500  w-full text-2xl text-white cursor-pointer" disabled>Sending</button>
                            :
                            <button className="p-2 rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500  w-full text-2xl text-white cursor-pointer">Submit</button>


                        }
                    </div>
                </form>
            </div>
        </>
    )
}