import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Gellary = () => {
  const [gellary, setGellary] = useState();

  useEffect(() => {
    fetch("/assets/Data/Gallery.json")
      .then((res) => res.json())
      .then((gellary) => setGellary(gellary));
  }, []);

  
    return (
        <div className="about_gellary py-2 py-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-provide">
                    {gellary?.length > 0 &&
                        gellary?.map((item, index)=> 
                            
                            <div key={index} className="service-provide-item">
                            <Image
                              className="img-fluid"
                              src={item.img}
                              alt=""
                              width="100%"
                              height="100%"
                              layout='responsive'
                            />
                          </div>
                            )
                    }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Gellary;