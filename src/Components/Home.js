import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
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
import { Rating } from "@mui/material";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(id) {
    console.log(id);
  }
  function handleClick() {}

  return (
    <section className="items">
      {!!products && products.length > 0 ? (
        products.map((product) => {
          return (
            <>
              <div
                // key={product.id}
                to="/"
                className="add-to-cart"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <span className="cart-count">{0}</span>
                <img
                  alt="addToCart"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VgDDUaewB94kEe7tlvA8XZ6gKS7-PWaS0kMHZoicSg&usqp=CAU&ec=48600113"
                />
              </div>

              {/* Modal  */}
              <Modal value={product} />

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
                      <div style={{ marginTop: "10px" }}>
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
                      {/* <i>rate: {product.rating.rate}</i> */}
                      <Rating
                        name="half-rating-read"
                        sx={{
                          "& .MuiRating-iconFilled": {
                            color: "yellow",
                          },
                        }}
                        defaultValue={product.rating.rate}
                        precision={0.5}
                        readOnly
                      />
                    </CardText>
                    <Button
                      onClick={() => handleSubmit(product)}
                      block
                      color="success"
                    >
                      Add To Cart
                    </Button>
                    <hr />

                    <div>
                      <Button
                        // key={product.id}
                        id="UncontrolledPopover"
                        type="button"
                        color="warning"
                        block
                        onClick={(e) =>
                          handleClick({
                            ...product,
                            title: e.target.value,
                            description: e.target.value,
                          })
                        }
                      >
                        Description
                      </Button>
                      {/* <div>{product.title}</div>
                      <div>{product.description}</div> */}
                      <UncontrolledPopover
                        placement="bottom"
                        target="UncontrolledPopover"
                      >
                        <PopoverHeader style={{ backgroundColor: "black" }}>
                          <div
                            style={{ backgroundColor: "black", color: "white" }}
                            onChange={handleClick}
                          >
                            {product.title}
                          </div>
                        </PopoverHeader>
                        <PopoverBody>
                          <div
                            style={{ color: "white" }}
                            onChange={handleClick}
                          >
                            {product.description}
                          </div>
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
