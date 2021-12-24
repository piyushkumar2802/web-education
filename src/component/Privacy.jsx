import React, { Component } from "react";
import Privacystyle from "./style/privacy_style";
import Genrate from "./image/privacy/privacy-policy1.png";
import Website from "./image/privacy/termify-contract.svg";
import Stores from "./image/privacy/termify-privacy.svg";
import Thirdparty from "./image/privacy/termify-use-privacy.svg";
import { FaGalacticRepublic, FaCheck } from "react-icons/fa";

class Privacy extends Component {
  render() {
    return (
      <div>
        <Privacystyle />
        <section className="privacy-heading color pb-7 pb-lg-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-12 col-lg-8">
                <h1
                  className="check-color display-2 mb-4"
                  style={{ fontSize: 34, fontWeight: "bolder" }}
                >
                  Your Privacy Policy.
                </h1>
                <p className="lead mb-3 mb-lg-5">
                  We create customized Privacy Policies for web, Android &amp;
                  iOS app, Facebook app, Twitter developer account, Squarespace,
                  Blogger, Wordpress, Shopify and more.
                </p>
              </div>
              <div className="col-12 col-lg-2">
                <FaGalacticRepublic className="privacy-icon-logo" />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-lg pt-6">
          <div className="container">
            <div className="row justify-content-between row-grid align-items-center mb-5">
              <div className="col-12 col-lg-5 order-lg-2">
                <h2 className="check-color font-weight-bolder mb-4">
                  Privacy Policy
                </h2>
                <p>
                  With Termify you can easily generate and download your
                  customized and up to date Privacy Policy
                </p>
                <ol className="lista2">
                  <FaCheck className="check-color" />
                  &nbsp; Free Updates
                </ol>
                <ol className="lista2">
                  <FaCheck className="check-color" /> &nbsp; Download Privacy
                  Policy (PDF, DOCX, TXT and HTML)
                </ol>
                <ol className="lista2">
                  <FaCheck className="check-color" /> &nbsp; Edit and customize
                  manually your policies
                </ol>
                <ol className="lista2">
                  <FaCheck className="check-color" />
                  &nbsp; Termify.io hosts all your policies
                </ol>
              </div>
              <div className="col-12 col-lg-5 mr-lg-auto">
                <img src={Genrate} className="w-100" alt=" not found" />
              </div>
            </div>
            <hr />

            <div className="row justify-content-between row-grid align-items-center mb-5">
              <div className="col-12 col-md-5">
                <h2 className="check-color font-weight-bolder mb-4">
                  Privacy Policy for websites
                </h2>
                <p>
                  Creating a Privacy Policy for your application or website can
                  take a lot of time. You could either spend tons of money on
                  hiring a lawyer, or you could simply use our service and get a
                  unique Privacy Policy fully custumized to your website.
                </p>
                <p>
                  You can also generate your Privacy Policy for website
                  templates like:
                </p>
                <ol className="lista2">
                  <FaCheck className="check-color" />
                  &nbsp; Wix
                </ol>
                <ol className="lista2">
                  <FaCheck className="check-color" />
                  &nbsp; Wordpress
                </ol>
                <ol className="lista2">
                  <FaCheck className="check-color" />
                  &nbsp; Shopify
                </ol>
                <ol className="lista2">
                  <FaCheck className="check-color" />
                  &nbsp; Squarespace
                </ol>
                <ol className="lista2">
                  <FaCheck className="check-color" />
                  &nbsp; And many more
                </ol>
              </div>
              <div className="col-12 col-md-5 ml-md-auto">
                <img src={Stores} className="w-100" alt="not found" />
              </div>
            </div>
            <hr />

            <div className="row justify-content-between row-grid align-items-center mb-5">
              <div className="col-12 col-lg-6 order-lg-2">
                <h3 className="check-color font-weight-bolder">
                  Privacy Policy for e-commerce stores
                </h3>
                <p>
                  If your website or app has the option to receive payments then
                  including a Privacy Policy is required by law. We will make
                  sure that your Privacy Policy ensures that you stay in line
                  with your legal obligations.
                </p>
                <h3 className="check-color font-weight-bolder">
                  Privacy Policy for mobile &amp; desktop apps
                </h3>
                <p>
                  For any app you are developing you will need a Privacy Policy
                  to launch it. Termify can help you generate the best for the
                  case and get your app ready for review.
                </p>
                <h3 className="check-color font-weight-bolder">
                  Privacy Policy for Facebook pages &amp; apps
                </h3>
                <p>
                  Many platforms like facebook are requiring users that are
                  submitting their official apps to submit a Privacy Policy even
                  if you are not collecting any data from your users. Generate
                  your Privacy Policy and get your unique link to submit to
                  those platforms.
                </p>
              </div>
              <div className="col-12 col-lg-5 mr-lg-auto">
                <img src={Website} className="w-100" alt="not found" />
              </div>
            </div>
            <hr />

            <div className="row justify-content-between row-grid align-items-center mb-5">
              <div className="col-12 col-md-5">
                <h2 className="check-color font-weight-bolder mb-4">
                  Privacy Policy for third party services
                </h2>
                <p>
                  Some third party services require you to have a Privacy
                  Policy. The use of ads, analytics or third party payments
                  usually ask you for a Privacy Policy. Google Ads might be the
                  one asking for your Privacy Policy, or Amazon, and many more
                </p>
              </div>
              <div className="col-12 col-md-5 ml-md-auto">
                <img src={Thirdparty} className="w-100" alt="not fond" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Privacy;
