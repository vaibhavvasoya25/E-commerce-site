import React from "react";

const Modal = (props) => {
  function orderDone() {
    alert("Order successfully Done.");
  }
  return (
    <>
      <div
        style={{ opacity: "0.9" }}
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div
              style={{ backgroundColor: "black", color: "white" }}
              className="modal-header"
            >
              <h1
                style={{ backgroundColor: "black" }}
                className="modal-title fs-5"
                id="exampleModalLabel"
              >
                <span style={{ backgroundColor: "black", color: "white" }}>
                  Total Amount : ${" "}
                  <b style={{ color: "red", backgroundColor: "black" }}>0</b>
                </span>
              </h1>
              <button
                style={{ backgroundColor: "white" }}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              style={{ backgroundColor: "white", color: "black" }}
              className="modal-body"
            >
              <span>{props.title}</span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-success"
                onClick={orderDone}
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
