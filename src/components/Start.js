import React from "react";
import Button from "@mui/material/Button";
import { Player, BigPlayButton, ControlBar } from "video-react";

function Start() {
  return (
    <div>
      <div className="container">
        <div className="containerMiddle">
          <div className="header1">
            #ICO Landing page for your cryptocurrency project
          </div>

          <div className="flex">
            <div className="textArea">
              <div>
                Decentralized Demo Platform for ICO Developers, Advisors,
                Crypto-Experts and Investors.{" "}
              </div>
              <div className="buttonContainer">
                <div>
                  {" "}
                  <Button variant="contained" color="primary">
                    {" "}
                    SIGN UP TO JOIN{" "}
                  </Button>{" "}
                </div>
              </div>
            </div>

            <div className="movieContainer">
              <Player
                poster="https://blog.sodio.tech/wp-content/uploads/2018/03/ethex-is-decentralized2x.1551cb1c.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              >
                <BigPlayButton position="center" />
                <ControlBar autoHide={false} disableCompletely={true} />
              </Player>
            </div>
          </div>

          <div className="tokenSaleContainer flex">
            <div className="tokenSaleLeftSide">
              <div className="flex space-between">
                <div className="tokensSold">Tokens Sold: 20</div>
                <div className="contributors">
                  Contributers:<b> 50</b>
                </div>
              </div>
              <div className="totalSuppy">
                10 <b>DC</b>
              </div>
              <div id="contribute" href="">
                <Button variant="contained" color="primary">
                  BUY TOKENS | 25% Bonus
                </Button>
              </div>
            </div>

            <div className="tokenSaleRightSide">
              <div className="titleTokenSale">TOKEN SALE IS LIVE</div>
              <div className="tokenSaleEnds"> TOKEN SALE ENDs IN </div>
              <div className="time flex space-around">
                <div>
                  <div className="headerTime">23</div>
                  <div>Days</div>
                </div>
                <div>
                  <div className="headerTime">12</div>
                  <div>Hours</div>
                </div>
                <div>
                  <div className="headerTime">49</div>
                  <div>Min</div>
                </div>
                <div>
                  <div className="headerTime">2</div>
                  <div>Sec</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Icons space-around flex">
        <i className="fab fa-bitcoin"></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-telegram-plane"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-reddit-alien"></i>
      </div>
    </div>
  );
}

export default Start;
