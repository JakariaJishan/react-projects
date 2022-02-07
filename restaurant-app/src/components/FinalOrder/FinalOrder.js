import Button from '@mui/material/Button';
import React from "react";
import rider from "../../images/Group 1151.png";
import riderLogo from "../../images/Group 1152.png";
import img from "../../images/map.png";

const FinalOrder = () => {
      let displayName = sessionStorage.getItem('display name');
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "1rem",
          width: "80%",
          margin: "3rem auto",
        }}
      >
        <div>
          <img src={img} width='100%' alt="" />
        </div>
        <div
          style={{
            margin: "1rem auto",
            padding: "1rem",
            width:'65%', 
          }}
        >
          <img src={rider} alt="asdf" width="20%" />
          <div
            style={{
              background: "#eee",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <p>Thank you for choose</p>
            <h1>Hot Chilli Restaurent</h1>
          </div>
          <div>
            {" "}
            <p style={{ fontSize: "30px", fontWeight: "bold" }}>11:09:53 AM</p>
            <h3> Mon Feb 07 2022</h3>
            Estimated Delivery Time
          </div>
          <div
            style={{
              background: "#eee",
              borderRadius: "10px",
              padding: "10px",
              marginTop: "2rem",
              display:'flex',
              alignItems:'center',
              
            }}
          >
            <img src={riderLogo} width="15%" alt="" />
            <div style={{marginLeft:'1rem'}}>
              <h2>Jack</h2>
              <p>Your rider</p>
            </div>
          </div>
          <Button variant='contained' fullWidth size='large' style={{background:'#ef7b1c', marginTop:'1rem'}} onClick={()=> alert('thnx' + ' '+displayName + ' '+'your order confirmed')}>Confirm</Button>
        </div>
      </div>
    </div>
  );
};

export default FinalOrder;
