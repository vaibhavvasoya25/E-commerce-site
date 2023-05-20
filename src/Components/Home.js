import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
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

export const IdContext = React.createContext();
export const ImageContext = React.createContext();
export const TitleContext = React.createContext();
export const PriceContext = React.createContext();
export const product = React.createContext();

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(para) {
    const temp = [...cart];
    temp.push(para);
    setCart(temp);
    console.log({ cart });
    return para;
  }

  function handleClick() {}

  return (
    <>
      <Header />
      <section className="items">
        <product.Provider
          // value={cart}
          value={cart}
          // handleSubmit={handleSubmit}
        >
          {!!products && products.length > 0 ? (
            products.map((product, i) => {
              return (
                <>
                  {/* Modal  */}

                  <IdContext.Provider
                    // value={cart}
                    value={product.id}
                    // handleSubmit={handleSubmit}
                  >
                    <ImageContext.Provider value={product.image}>
                      <TitleContext.Provider value={product.title}>
                        <PriceContext.Provider value={product.price}>
                          <Modal />
                        </PriceContext.Provider>
                      </TitleContext.Provider>
                    </ImageContext.Provider>
                  </IdContext.Provider>

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
                      <img
                        className="cardImage"
                        alt="Sample"
                        src={product.image}
                      />
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
                                style={{
                                  backgroundColor: "black",
                                  color: "white",
                                }}
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
        </product.Provider>
      </section>
    </>
  );
}

export default Home;
