import React from 'react';

const Subscribe = () => {
    return (
        <div className="subscribe_part mb-5">
        <div className="container bg">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="subscribe d-flex align-items-center justify-content-between flex-column flex-lg-row"
              >
                <div className="content text-lg-start text-center">
                  <h2 className="text-primary">
                    Subscribe Now for Get <br className="d-none d-lg-block" />
                    Special Features!
                  </h2>
                  <p className="subtitle-1-n text-primary" style={{opacity: '0.7'}}>
                    Let's subscribe with us and find the fun.
                  </p>
                </div>
                <div className="button">
                  <button>Subscribe Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Subscribe;