import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function StepReview({ formData, back }) {

  const [loading, setLoading] = useState(false);

  const submitData = () => {
    setLoading(true);

    emailjs.send(
      "service_umbkyek",
      "template_fgtw2ud",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date
          ? new Date(formData.date).toDateString()
          : "",
        course_name: formData.course?.name,
        course_duration: formData.course?.duration,
        course_price: `£${formData.course?.price}`,
      },
      "m5W1vJH1hNlv0MfTj"
    )

    .then(() => {

      if (formData.course?.price === 49.99) {
        window.location.href = "https://buy.stripe.com/7sY6oA5vUbCv3hO6MubQY05";
      } 
      else if (formData.course?.price === 99.99) {
        window.location.href = "https://buy.stripe.com/6oU4gs4rQ9un2dKb2KbQY00";
      }

    })

    .catch((error) => {
      console.log("Email Error:", error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    });
  };

  return (

    <div className="flex items-center justify-center md:px-5">

      <div className="w-full max-w-lg bg-white shadow-xl p-6 md:p-10 space-y-8">

        {/* Title */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F2D4A]">
            Review Your Booking
          </h2>
          <p className="text-gray-400 text-sm pt-3">
            Please confirm your details before continuing to payment
          </p>
        </div>

        {/* User Info */}
        <div className="grid md:grid-cols-2 gap-6 border-b pb-6">

          <div>
            <p className="text-gray-400 text-sm">Full Name</p>
            <p className="font-semibold text-[#1F2D4A] text-sm">
              {formData.name}
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <p className="font-semibold text-[#1F2D4A] text-sm">
              {formData.email}
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Phone</p>
            <p className="font-semibold text-[#1F2D4A] text-sm">
              {formData.phone}
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Interview Date</p>
            <p className="font-semibold text-[#1F2D4A] text-sm">
              {formData.date
                ? new Date(formData.date).toDateString()
                : ""}
            </p>
          </div>

        </div>

        {/* Course Summary */}
        <div className="bg-[#F8F7FC] p-6 border">

          <h3 className="font-semibold text-lg text-[#1F2D4A] mb-4">
            Selected Course
          </h3>

          <div className="flex justify-between items-center flex-wrap gap-4">

            <div>
              <p className="font-semibold text-[#1F2D4A]">
                {formData.course?.name}
              </p>

              <p className="text-sm text-gray-400">
                Duration: {formData.course?.duration}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-400">
                Total Price
              </p>

              <p className="text-2xl font-bold text-[#324E91]">
                £{formData.course?.price}
              </p>
            </div>

          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 pt-4 text-sm">

          <button
            onClick={back}
            className="w-full md:w-auto flex-1 border border-gray-300 hover:bg-gray-100 transition p-3 font-medium"
          >
            Back
          </button>

          <button
            onClick={submitData}
            disabled={loading}
            className="w-full md:w-auto flex-1 bg-[#324E91] hover:bg-[#263b6d] transition text-white p-3 font-semibold shadow-md"
          >

            {loading
              ? "Processing..."
              : "Pay Now"}

          </button>

        </div>

      </div>

    </div>

  );
}