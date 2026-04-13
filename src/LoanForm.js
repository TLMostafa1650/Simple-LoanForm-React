import "./LoanForm.css";
import Model from "./Model";
import { useState } from "react";
import Swal from "sweetalert2";

export default function LoanForm() {

  const [isModelVisible, setisModelVisible] = useState(false);

  const [info, setinfo] = useState({
    name: "",
    phone: "",
    age: "",
    employed: false,
    loanAmount: "",
  });


    function showError(title, text) {
      Swal.fire({
        title,
        text,
        icon: "error",
        confirmButtonText: "I Understand",
        didOpen: () => {
          const titleEl = document.querySelector(".swal2-title");
          const textEl = document.querySelector(".swal2-html-container");

          if (titleEl) {
            titleEl.style.fontSize = "50px";
            titleEl.style.marginTop = "-50px";
          }

          if (textEl) {
            textEl.style.fontSize = "28px";
          }
        },
      });
    }


  function handleSubmit(e) {
    e.preventDefault();



  if (Number(info.age) < 18) {
    showError(
      "Age Restriction",
      "You must be at least 18 years old to apply for a loan.",
    );
    return;
  }

  if (Number(info.age) > 100) {
    showError(
      "Age Restriction",
      "Please Enter a Valid Age.",
    );
    return;
  }

  if (info.phone.length !== 12) {
    showError(
      "Invalid Phone Number",
      "Please enter a valid phone number.",
    );
    return;
  }
  
  if (!/^\d+$/.test(info.phone)) {
    showError("Invalid Phone", "Only digits are allowed");
    return;
  }

    isModelVisible ? setisModelVisible(false) : setisModelVisible(true);
  


  }



function HandleDivClick() {
    if (isModelVisible) {
      setisModelVisible(false);
    } 
}




  const btnisdisabled = info.name == "" || info.phone == "" || info.age == "";

  let btnClasses = "";
  if (btnisdisabled) {
    btnClasses = "btnClasses";
  } else {
    btnClasses = "";
  }

  return (
    <div
      className="flex"
      style={{ flexDirection: "column", padding: "20px", borderRadius: "10px" }}
      onClick={HandleDivClick}
    >
      <form id="Loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1 style={{ fontSize: "60px" }}>Loan Form</h1>
        <hr></hr>
        <label style={{ fontSize: "40px" }}>Your Name:</label>
        <input
          type="text"
          name="name"
          value={info.name}
          onChange={(e) => setinfo({ ...info, name: e.target.value })}
          placeholder="Enter your name"
        />

        <label style={{ fontSize: "40px" }}>Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={info.phone}
          onChange={(e) => setinfo({ ...info, phone: e.target.value })}
          placeholder="Enter your phone number"
        />

        <label style={{ fontSize: "40px" }}>Age:</label>
        <input
          type="number"
          name="age"
          value={info.age}
          onChange={(e) => setinfo({ ...info, age: e.target.value })}
          placeholder="Enter your age"
        />

        <label style={{ fontSize: "40px", marginTop: "30px" }}>
          {" "}
          Are You Employed?
        </label>
        <input
          type="checkbox"
          name="employed"
          checked={info.employed}
          onChange={(e) => setinfo({ ...info, employed: e.target.checked })}
        />

        <label style={{ fontSize: "40px" }}>Loan Amount:</label>
        <select
          name="loanAmount"
          value={info.loanAmount}
          onChange={(e) => setinfo({ ...info, loanAmount: e.target.value })}
        >
          <option>Less Than 500$</option>
          <option>Between 500$ and 1000$</option>
          <option>More Than 1000$</option>
        </select>

        <button
          className={btnClasses}
          onClick={handleSubmit}
          disabled={btnisdisabled}
          id="submit-loan-btn"
          type="submit"
        >
          Submit
        </button>
      </form>

      <Model
        isVisible={isModelVisible}
      />
    </div>
  );
}
