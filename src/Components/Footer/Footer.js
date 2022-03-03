import React from 'react';

export const Footer = () => {
    return (
      <div className="main-footer">
          <div className="container">
            <div className="row">
                <div className="col">
                  <h4>Meme$ Inc</h4>
                  <ul className="list-unstyled">

                    <li>000-000-0000</li>
                    <li>Fort Worth, Texas</li>
                    <li>123 South North Street</li>

                  </ul>
                </div>
                <div className="col">
                  <h4>About</h4>
                  <ul className="list-unstyled">

                    <li>000-000-0000</li>
                    <li>Fort Worth, Texas</li>
                    <li>123 South North Street</li>

                  </ul>
                </div>
                <div className="col">
                  <h4>Contact</h4>
                  <ul className="list-unstyled">

                    <li>000-000-0000</li>
                    <li>Fort Worth, Texas</li>
                    <li>123 South North Street</li>

                  </ul>
                </div>
            </div>
            <hr />
            <div className="row">
              <p clasName="col-sm">
                  &copy;{new Date().getFullYear()} Meme$ INC | All rights reserved | Terms Of Service | Privacy
              </p>
            </div>
          </div>
      </div>
    );
  }