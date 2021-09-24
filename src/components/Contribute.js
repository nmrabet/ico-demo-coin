import React from "react";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

function Contribute() {
  return (
    <div>
      <div className="contribute">Contribute</div>
      <div className=" contributeContainer">
        <form>
          <div className="buyCoins">
            <div className="amountToBuy">Amount of ether to buy:</div>
            <TextField> </TextField>
            <div> ≈ DC </div>
            <div className="etherDC"> (1 ETH ≈ 100 + 25 (Bonus) DC) </div>
          </div>
          <div className="buttonBuy">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              value="Submit"
            >
              Buy DC Tokens | 25% Bonus{" "}
            </Button>
          </div>
        </form>

        <div className="flex errorMessage">
          <i className="material-icons">error_outline</i>
          <div>Error Message: asydassadasdas</div>
        </div>

        <div className="flex loadingContainer">
          <div>
            <div className="loadingText"> Waiting For Confirmation</div>
            <div className="loadTextSub">(this can take up to 30 seconds)</div>
          </div>
          <CircularProgress />
        </div>

        <div className="flex successfully">
          You successfully bought DC Coins!
        </div>
      </div>
    </div>
  );
}

export default Contribute;
