import { useEffect } from "react";
import Swal from "sweetalert2";

export default function Model({ isVisible , errormessage = null }) {
  useEffect(() => {
    if (isVisible) {
      Swal.fire({
        title: "Form Submitted",
        text: "Your loan application has been submitted successfully.",
        icon: "success",
        theme: "dark",
        confirmButtonText: "Hooray!",
        didOpen: () => {
          document.querySelector(".swal2-title").style.fontSize = "50px";
          document.querySelector(".swal2-title").style.marginTop = "-50px";
          document.querySelector(".swal2-html-container").style.fontSize =
            "28px";
        },
      });
    }

  }, [isVisible]);

  if (!isVisible) return null;

  return <div id="Model"></div>;
}



