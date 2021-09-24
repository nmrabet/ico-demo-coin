import React from "react";
import Button from "@mui/material/Button";

function Whitepaper() {
  return (
    <div>
      <div className="whitepaper">
        <Button size="large" variant="contained" color="primary">
          <span className="material-icons">file_copy</span>
          <span>WHITEPAPER</span>
        </Button>
      </div>
    </div>
  );
}

export default Whitepaper;
