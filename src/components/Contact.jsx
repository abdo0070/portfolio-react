import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const Contact = () => {
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
        Swal.fire({
          icon: "success",
          title: `${formData.name} ,Message Sent!`,
          text: "Thanks for reaching out — I’ll get back to you soon.",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          timer: 2000,
        });
      })
      .finally(() => setIsSending(false));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({});
  };

  return (
    <div className="w-10/12 text-white">
      <h2 className="font-bold text-center">FEEL FREE TO EMAIL ME </h2>
      <form action="" onSubmit={handleSubmit}>
        {/**EMAIL&NAME SECTION */}
        <div className="flex sm:flex-row flex-col w-full justify-between sm:gap-2">
          {/*NAME*/}
          <div className="w-full">
            <div className="w-full flex flex-row  border-slate-400 border p-1 rounded-sm my-2">
              <label
                htmlFor="name"
                className=" text-slate-200 font-serif w-2/12"
              >
                Name:
              </label>
              <input
                type="text"
                className="w-10/12 rounded-sm bg-slate-800 px-1"
                placeholder="ex:jo"
                value={formData.name}
                id="name"
                name="name"
                onChange={handleChange}
              />
            </div>
            {errors.name && <p className="text-rose-800">{errors.name}</p>}
          </div>

          {/*EMAIL*/}
          <div className="w-full">
            <div className="w-full flex flex-row  border-slate-400 border p-1 rounded-sm my-2">
              <label
                htmlFor="email"
                className="text-slate-200 font-serif w-2/12"
              >
                Email:
              </label>
              <input
                type="email"
                className="w-10/12 rounded-sm bg-slate-800 px-1 "
                placeholder="ex:jo@gmail.com"
                value={formData.email}
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            {errors.email && <p className="text-rose-800">{errors.email}</p>}
          </div>
        </div>

        {/**MESSAGE SECTION */}
        <div className="flex flex-col border-slate-400 border p-1 rounded-sm my-2">
          <label
            htmlFor="message"
            className="text-slate-200 font-serif w-3/12 py-1 "
          >
            Message:
          </label>
          <textarea
            className="w-full bg-slate-800"
            rows={6}
            placeholder="type..."
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-rose-800">{errors.message}</p>}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full sm:w-1/4 bg-sky-700 hover:bg-sky-600 text-slate-100 font-semibold py-2 rounded-sm mt-4 transition-colors duration-200"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
