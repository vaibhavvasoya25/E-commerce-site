import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleClick() {}

  return (
    <section className="items">
      {!!products && products.length > 0 ? (
        products.map((product) => {
          return (
            <>
              <div
                key={product.id}
                to="/"
                className="add-to-cart"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <span className="cart-count">{0}</span>
                <img
                  alt="addToCart"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VgDDUaewB94kEe7tlvA8XZ6gKS7-PWaS0kMHZoicSg&usqp=CAU&ec=48600113"
                />
              </div>

              {/* Modal  */}
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div key={product.id} className="content">
                <Card
                  body
                  color="dark"
                  style={{
                    width: "22rem",
                  }}
                >
                  <CardSubtitle className="mb-2 text-muted" tag="h5">
                    {product.category}
                  </CardSubtitle>
                  <img className="cardImage" alt="Sample" src={product.image} />
                  <CardBody>
                    <div className="cardTitle">
                      <div style={{ marginTop: "40px" }}>
                        <CardTitle tag="h5">
                          <span>{product.title}</span>
                        </CardTitle>
                      </div>
                    </div>
                    <CardSubtitle className="mb-2" tag="h5">
                      <span style={{ color: "red" }}>
                        Price: ${product.price}
                      </span>
                    </CardSubtitle>
                    <CardText tag="h5">
                      <i>rate: {product.rating.rate}</i>
                    </CardText>
                    <Button
                      onClick={() => handleClick(console.log(product))}
                      block
                      color="success"
                    >
                      Add To Cart
                    </Button>
                    <hr />

                    <div>
                      <Button
                        id="UncontrolledPopover"
                        type="button"
                        color="warning"
                        block
                        // onClick={() => handleClick(console.log(product))}
                      >
                        Description
                      </Button>
                      <UncontrolledPopover
                        placement="bottom"
                        target="UncontrolledPopover"
                      >
                        <PopoverHeader>
                          <span>Description</span>
                        </PopoverHeader>
                        <PopoverBody>
                          <span>No description yet..</span>
                        </PopoverBody>
                      </UncontrolledPopover>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </>
          );
        })
      ) : (
        <p>API did not provided any product, try again.</p>
      )}
    </section>
  );
}

export default Home;
