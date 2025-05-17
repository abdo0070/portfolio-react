import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  /*
  1- make the html code (DONE)
  2- make the validation (DONE)
  3- finish the tailwind.css
  */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const validation = () => {
    let validErrors = {};
    const nameRegex = /^[A-Za-z\s'-]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // name VALIDATION.
    if (!formData.name) {
      validErrors.name = "name is required";
    } else if (!nameRegex.test(formData.name)) {
      validErrors.name = "name is not valid";
    }
    // email validation
    if (!formData.email) {
      validErrors.email = "email is required";
    } else if (!emailRegex.test(formData.email)) {
      validErrors.email = "email is not valid";
    }
    // message validation
    if (!formData.message) {
      validErrors.message = "message is required";
    }
    return validErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    e.preventDefault();
    const validationErrors = validation();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    emailjs
      .send("service_jwvdfee", "template_3rbri5s", formData, {
        publicKey: "MVY6e9PxVx35kilFq",
      })
      .then((res) => {
        alert("success");
      })
      .catch((e) => {
        console.log(e);
        console.log("FAILED");
      })
      .finally(() => setIsSending(false));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="w-full flex flex-row p-1">
          <label htmlFor="name" className="w-3/12">
            name
          </label>
          <input
            type="text"
            className="w-9/12"
            placeholder="name"
            value={formData.name}
            id="name"
            name="name"
            onChange={handleChange}
          />
          {errors.name && <p className="text-rose-800">{errors.name}</p>}
        </div>

        <div className="w-full flex flex-row p-1">
          <label htmlFor="email" className="w-3/12">
            Email
          </label>
          <input
            type="email"
            className="w-9/12"
            placeholder="email"
            value={formData.email}
            id="email"
            name="email"
            onChange={handleChange}
          />
          {errors.email && <p className="text-rose-800">{errors.email}</p>}
        </div>

        <div className="">
          <label htmlFor="message">Message</label>
          <textarea
            rows={6}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-rose-800">{errors.message}</p>}
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="text-white bg-green-400 p-1 rounded-md"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default Contact;
