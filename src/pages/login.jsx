import React from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import sideImage from "../../assets/pexels-maria-orlova-4940756 1.png";
import Logo from "../../assets/xshopper-logo 1 (1).png";
import { Checkbox } from "@mui/material";
import Icon from "../../assets/image 1.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./style.css";

const Index = () => {
  let navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statement, setStatement] = useState("");
  const [correct, setCorrect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password, Email);

    try {
      const res = await axios.post(
        `http://localhost:8080/api/user/login/`,

        {
          email: Email,
          password: password,
        }
      );

      if (res.data) {
        console.log(res.data);
        localStorage.setItem("Token", res.data);
        navigate("/dashboard");
        window.location.reload();
      } else {
        console.log("else is runnign");
        setCorrect(true);
      }
      // console.log("CBM", { res });
      //   .then((res)=>{
      //   console.log(res.data)
      //   localStorage.setItem("Token",res.data)
      //     navigate("/dashboard")
      //     window.location.reload()

      // }).catch((err)=>{

      //   console.log("error",err)
      // })
    } catch (error) {
      if (error.request) {
        console.log(error.response);
        setStatement(error.response.data);
        setCorrect(true);
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log("CBM", { error });
      }
    }
  };
  return (
    <div className="body">
      <form onSubmit={handleSubmit}>
        <Container maxWidth>
          <Grid container>
            <Grid xs={6} lg={4} md={4}>
              <img
                className="side-image"
                src={sideImage}
                alt=""
                width={"auto"}
                height={"500"}
              />
              <div className="color"></div>
            </Grid>
            <Grid justifyContent={"center"} xs={12} lg={8} md={8}>
              <img src={Logo} className="Logo" alt="image logo" width={200} />
              <br></br>
              <button className="gmail-button">
                <img src={Icon} alt="" width={25} /> Sing in with Google
              </button>
              <br></br>

              <h1>Or sing in with email</h1>

              <h6
                style={
                  correct
                    ? {
                        display: "block",
                        textAlign: "center",
                        color: "red",
                        fontSize: "15px",
                      }
                    : { display: "none" }
                }
              >
                {statement}
              </h6>
              <p className="Email-password">Email*</p>
              <input
                type="text"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                name=""
                id=""
              />
              <p className="Email-password2">Password*</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                name=""
                id=""
              />
              <div className="forget-section">
                <div>
                  <Checkbox {..."Remember me"} />
                  <label className="remember-me" htmlFor="Remeber me">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <div>
                  <label className="forget-passwrod" htmlFor="">
                    Forget Passwword
                  </label>
                </div>
              </div>
              <button className="forget-button">Login</button>
            </Grid>
          </Grid>
        </Container>
      </form>
    </div>
  );
};

export default Index;
