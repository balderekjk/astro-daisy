import { useState } from "react";

const Form = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusClass, setStatusClass] = useState("hidden");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusClass("neutral");
    setStatusMessage("Processing. Hold tight...");

    const data = new FormData(event.target);
    const action = event.target.action;

    try {
      const response = await fetch(action, {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (result.error) {
        setStatusMessage(
          "There was an error processing your form. Feel free to try again and/or contact us."
        );
        setStatusClass("error");
      } else {
        setStatusMessage("Success! Your form submission was processed.");
        setStatusClass("success");
        event.target.reset();
      }
    } catch (error) {
      setStatusMessage(
        "Sorry, something went wrong. Feel free to contact us about this matter."
      );
      setStatusClass("error");
    } finally {
      setTimeout(() => {
        setStatusMessage("");
        setStatusClass("hidden");
      }, 5000);
    }
  };

  return (
    <form
      className="card card-bordered not-prose [&_label:not(:has([type=radio])):not(:has([type=checkbox]))]:form-control [&_input:not([type=radio]):not([type=checkbox])]:input [&_input:not([type=radio]):not([type=checkbox])]:input-bordered [&_input]:!outline-blue-600 [&_input+span]:ml-3"
      onSubmit={handleSubmit}
      action="https://script.google.com/macros/s/AKfycbw-y6YYG9c_3qcujy_-Qqaem0She2U9lBE76UV8m1sBNgryBxxRqAjCT9AUUQKxAsnq/exec?sheetName=2024 Mock Registrants"
    >
      <div className="card-body">
        <h3 className="card-title">Registrant Information</h3>
        <p>asterisk (*) means required</p>
        <hr />
        <label>
          First Name*
          <input name="First Name" type="text" required />
        </label>
        <label>
          Last Name*
          <input name="Last Name" type="text" required />
        </label>
        <label>
          Email*
          <input name="Email" type="email" required />
        </label>
        <label>
          Organization or Affiliation*
          <input name="Organization" type="text" required />
        </label>
        <label>
          Position Title*
          <input name="Position" type="text" required />
        </label>
        <label>
          City*
          <input name="City" type="text" required />
        </label>
        <label>
          State*
          <input name="State" type="text" required />
        </label>
        <label>
          Zip Code*
          <input name="Zip" type="text" required />
        </label>
        <label>
          Phone Number*
          <input name="Phone" type="tel" required />
          <div className="label">
            <span className="label-text">numbers only</span>
          </div>
        </label>
        <h3 className="card-title">Payment Method*</h3>
        <p>
          **Only One Purchase Per Person/Email/Submission**
          <br />
          NHEA Convention Registration is $300
          <br />
          If paying with Cash, Check, or Purchase Order, direct your payment to:
          <br />
          NHEA
          <br />
          P.O. Box 1190
          <br />
          Wailuku, HI 96793
        </p>
        <hr />
        <label>
          <input type="radio" name="Payment Method" value="PayPal" />
          <span>PayPal</span>
          <p>Submit this form and yellow PayPal button will appear below</p>
        </label>
        <label>
          <input type="radio" name="Payment Method" value="Cash" />
          <span>Cash</span>
          <p>See above for address or have it ready on day of event</p>
        </label>
        <label>
          <input type="radio" name="Payment Method" value="Check" />
          <span>Check</span>
          <p>See above for address or have it ready on day of event</p>
        </label>
        <label>
          <input type="radio" name="Payment Method" value="Purchase Order" />
          <span>Purchase Order</span>
          <p>If known, please enter PO No. below; see above for address</p>
        </label>
        <label>
          Purchase Order No.
          <input
            name="Purchase Order No."
            type="text"
            placeholder="Only for purchase order"
          />
        </label>
        <button
          className="btn w-fit px-6"
          disabled={statusMessage ? true : false}
          id="action-submit"
        >
          Submit
        </button>
        <blockquote id="status">{statusMessage}</blockquote>
        <p>
          <strong>
            If you have any inquiries or requests please email{" "}
            <a href="#">nhea.hawaii@gmail.com</a>.
          </strong>{" "}
          This form is not yet protected by reCAPTCHA and the Google Privacy
          Policy and Terms of Service apply.
        </p>
      </div>
    </form>
  );
};

export default Form;
