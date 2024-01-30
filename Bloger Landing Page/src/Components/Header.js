import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [toggleProduct, SetToggleProduct] = useState(false);
  const [toggleCompany, SetToggleCompany] = useState(false);
  const [toggleConnect, SetToggleConnect] = useState(false);
  const [menu, setMenu] = useState(true);

  const handleProduct = () => {
    SetToggleProduct(!toggleProduct);
    SetToggleCompany(false);
    SetToggleConnect(false);
  };

  const handleCompany = () => {
    SetToggleCompany(!toggleCompany);
    SetToggleProduct(false);
    SetToggleConnect(false);
  };

  const handleConnect = () => {
    SetToggleConnect(!toggleConnect);
    SetToggleProduct(false);
    SetToggleCompany(false);
  };

  return (
    <>
      <div className="content header">
        <div className="left">
          <img src="logo.svg" alt="Logo" />
          <div className="tab">
            <p onClick={() => handleProduct()}>
              Product{" "}
              <img
                src="icon-arrow-light.svg"
                className={`arrow ${toggleProduct ? "arrow-down" : ""}`}
                alt=""
                onClick={() => {
                  SetToggleProduct(!toggleProduct);
                }}
              />
            </p>
            <div className={`${toggleProduct ? "show" : "hidden"}`}>
              <a href="##" onClick={() => handleProduct()}>
                Overview
              </a>
              <a href="##" onClick={() => handleProduct()}>
                Pricing
              </a>
              <a href="##" onClick={() => handleProduct()}>
                Marketplace
              </a>
              <a href="##" onClick={() => handleProduct()}>
                Features
              </a>
              <a href="##" onClick={() => handleProduct()}>
                Integrations
              </a>
            </div>
          </div>

          <div className="tab">
            <p onClick={() => handleCompany()}>
              Company{" "}
              <img
                src="icon-arrow-light.svg"
                className={`arrow ${toggleCompany ? "arrow-down" : ""}`}
                alt=""
                onClick={() => handleCompany()}
              />
            </p>
            <div className={`${toggleCompany ? "show" : "hidden"}`}>
              <a href="##" onClick={() => handleCompany()}>
                About
              </a>
              <a href="##" onClick={() => handleCompany()}>
                Team
              </a>
              <a href="##" onClick={() => handleCompany()}>
                Blog
              </a>
              <a
                href="##"
                onClick={() => {
                  SetToggleCompany(!toggleCompany);
                }}
              >
                Careers
              </a>
            </div>
          </div>

          <div className="tab">
            <p onClick={() => handleConnect()}>
              Connect{" "}
              <img
                src="icon-arrow-light.svg"
                className={`arrow ${toggleConnect ? "arrow-down" : ""}`}
                alt=""
                onClick={() => handleConnect()}
              />
            </p>
            <div className={`${toggleConnect ? "show" : "hidden"}`}>
              <a href="##" onClick={() => handleConnect()}>
                Contact
              </a>
              <a href="##" onClick={() => handleConnect()}>
                Newsletter
              </a>
              <a href="##" onClick={() => handleConnect()}>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <button>Login</button>
          <button className="active">Sign Up</button>
        </div>
        <div className="mobile-links">
          {menu ? (
            <IoMdMenu className="m-menu" onClick={() => setMenu(!menu)} />
          ) : (
            <IoCloseSharp className="m-menu" onClick={() => setMenu(!menu)} />
          )}
        </div>
      </div>

      {menu ? (
        ""
      ) : (
        <div className="links">
          <div className="tab-link">
            <p onClick={() => handleProduct()}>
              Product{" "}
              <img
                src="icon-arrow-dark.svg"
                className={`arrow ${toggleProduct ? "arrow-down" : ""}`}
                alt=""
                onClick={() => {
                  SetToggleProduct(!toggleProduct);
                }}
              />
            </p>
            <div className={`${toggleProduct ? "show" : "hidden"}`}>
              <a
                href="##"
                onClick={() => {
                  setMenu(!menu);
                  handleProduct();
                }}
              >
                Overview
              </a>
              <a
                href="##"
                onClick={() => {
                  setMenu(!menu);
                  handleProduct();
                }}
              >
                Pricing
              </a>
              <a
                href="##"
                onClick={() => {
                  setMenu(!menu);
                  handleProduct();
                }}
              >
                Marketplace
              </a>
              <a
                href="##"
                onClick={() => {
                  setMenu(!menu);
                  handleProduct();
                }}
              >
                Features
              </a>
              <a
                href="##"
                onClick={() => {
                  setMenu(!menu);
                  handleProduct();
                }}
              >
                Integrations
              </a>
            </div>
          </div>

          <div className="tab-link">
            <p onClick={() => handleCompany()}>
              Company{" "}
              <img
                src="icon-arrow-dark.svg"
                className={`arrow ${toggleCompany ? "arrow-down" : ""}`}
                alt=""
                onClick={() => {
                  setMenu(!menu);
                  handleCompany();
                }}
              />
            </p>
            <div className={`${toggleCompany ? "show" : "hidden"}`}>
              <a
                href="##"
                onClick={() => {
                  setMenu(!menu);
                  handleCompany();
                }}
              >
                About
              </a>
              <a
                href="##"
                onClick={() => {
                  setMenu(!menu);
                  handleCompany();
                }}
              >
                Team
              </a>
              <a
                href="##"
                onClick={() => {
                  setMenu(!menu);
                  handleCompany();
                }}
              >
                Blog
              </a>
              <a
                href="##"
                onClick={() => {
                  SetToggleCompany(!toggleCompany);
                }}
              >
                Careers
              </a>
            </div>
          </div>

          <div className="tab-link">
            <p onClick={() => handleConnect()}>
              Connect{" "}
              <img
                src="icon-arrow-dark.svg"
                className={`arrow ${toggleConnect ? "arrow-down" : ""}`}
                alt=""
                onClick={() => handleConnect()}
              />
            </p>
            <div className={`${toggleConnect ? "show" : "hidden"}`}>
              <a
                href="##"
                onClick={() => {
                  setMenu(!menu);
                  handleConnect();
                }}
              >
                Contact
              </a>
              <a
                href="##"
                onClick={() => {
                  setMenu(!menu);
                  handleConnect();
                }}
              >
                Newsletter
              </a>
              <a
                href="##"
                onClick={() => {
                  setMenu(!menu);
                  handleConnect();
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          <button>Login</button>
          <button className="active">Sign Up</button>
        </div>
      )}
    </>
  );
}

export default Header;
