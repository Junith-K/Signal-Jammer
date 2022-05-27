import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [userList, setUserList] = useState([]);

  const [isSignedIn, setisSignedIn] = useState(false);
  const [user_id, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [registerorsignin, setres] = useState(false);
  const [pin_id, setPinID] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = async () => {

    setIsToggled(!isToggled);
    if(isToggled){
      const url =
        "https://api.thingspeak.com/update?api_key=493SIMU5PO7N85T7&field1=32";

      try {
        const response = await fetch(url);
        var data = response.json();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    else{
      const url =
        "https://api.thingspeak.com/update?api_key=493SIMU5PO7N85T7&field1=1";

      try {
        const response = await fetch(url);
        var data = response.json();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
  }

  // const data = [
  //   {
  //     "data": "junith",
  //     "num": 1,
  //   },
  //   {}
  // ];
  // data.map((data)=>{})
  // return {
  //   ...data,
  //   "data": "random"
  // }

  const signin = async () => {
    const response = await Axios.get("http://localhost:3005/users");
    setUserList(response.data);
    console.log(userList);
  };

  useEffect(() => {
    for (let index = 0; index < userList.length; index++) {
      if (
        user_id === userList[index].access_id &&
        password === userList[index].password
      ) {
        setisSignedIn(true);
        break;
      } else {
        console.log(index);
      }
    }
  }, [userList]);

  const register = () => {
    if (registerorsignin) {
      if (
        user_id.trim().length !== 0 &&
        password.trim().length !== 0 &&
        pin_id === "12345"
      ) {
        Axios.post("http://localhost:3005/create", {
          user_id: user_id,
          password: password,
        }).then(() => {
          console.log("success");
          setisSignedIn(true);
        });
      }
    } else {
      setres(true);
    }
  };

  const notchange = () => {
    setres(false);
  };

  async function getapi() {
    const url =
      "https://api.thingspeak.com/update?api_key=493SIMU5PO7N85T7&field1=32";

    try {
      const response = await fetch(url);
      var data = response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  const [style,setStyle] = useState("sl");
  const [style1,setStyle1] = useState("sl");
  const [style2, setStyle2] = useState("sl");
  const [st1,setst1] = useState(false);
  const [st,setst] = useState(false);
  const [st2, setst2] = useState(false);

  function changestyle(){
    if(!st){
      setStyle("sl1");
      setst(true);
    }
    else{
      setst(false);
      setStyle("sl");
    }
  }
  function changestyle1() {
    if (!st1) {
      setst1(true);
      setStyle1("sl1");
    } else {
      setst1(false);
      setStyle1("sl");
    }
  }
  function changestyle2() {
    if (!st2) {
      setst2(true);
      setStyle2("sl1");
    } else {
      setst2(false);
      setStyle2("sl");
    }
  }

  return (
    <div className="App">
      <div className="set">
        <div className="heading">Border Defence SecureWeb</div>
      </div>
      {isSignedIn ? (
        <div className="mar">
          <div className="titles">About Jammer</div>
          <div className="main">
            <div>
              <div className="matter">
                A mobile phone signal jammer is a device that blocks reception
                between cell towers and mobile phones. Developed for use by the
                military and law enforcement, these devices were originally
                created to combat threats like cell phone-triggered explosives
                and hostage situations.
              </div>
            </div>
            {/* <button onClick={getapi}>dont</button> */}
          </div>
          <div className="titles">How do cell phone signal jammers work?</div>
          <div className="main">
            <div>
              <div className="matter">
                Known as cell jammers, signal blockers, GPS jammers, or text
                stoppers, a cell phone signal jammer holds up the radio
                frequency in a given area, creating a sort of signal traffic jam
                that blocks all communication. Like a radio silence bubble, no
                calls or texts can be sent or received as long as the user is
                within range of the cell phone signal blocker.
              </div>
            </div>
            {/* <button onClick={getapi}>dont</button> */}
          </div>
          <div className="titles">How do I detect a signal jammer?</div>
          <div className="main">
            <div>
              <div className="matter">
                The most common symptom of cell phone signal jammer interference
                is, you guessed it, dropped service. While apps do exist that
                claim to detect signal jammers, they are largely unproven, and
                require a working signal to function. Without highly advanced,
                military-level technology at hand, it is virtually impossible
                for the average consumer to definitively detect a cell phone
                jammer. However, if you suspect illegal activity of this sort,
                contact law enforcement or file a complaint with the FCC.
              </div>
            </div>
          </div>
          <div>
            <div className="titles">Jammer Type</div>
            <div className="sll">
              <div className={style} onClick={changestyle}>2G</div>
              <div className={style1} onClick={changestyle1}>3G</div>
              <div className={style2} onClick={changestyle2}>4G</div>
            </div>
          </div>
          <div className="setcre">
            {isToggled ? (
              <div className="create1">Signal Jammer Turned ON</div>
            ) : (
              <div className="create1">Signal Jammer Turned OFF</div>
            )}
          </div>
          <label className="toggle-switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className="switch" />
          </label>
        </div>
      ) : (
        <div className="set">
          <div className="signin">
            <div className="head">
              {registerorsignin ? "Register" : "Sign-In"}
            </div>
            <div className="int">
              <label style={{ marginRight: "90px" }}>ID : </label>
              <input
                placeholder="Enter a Email"
                type="email"
                onChange={(event) => setUserId(event.target.value)}
              />
            </div>
            <div className="int">
              <label>Password : </label>
              <input
                placeholder="Enter a Password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {registerorsignin ? (
              <div className="int">
                <label style={{ marginRight: "50px" }}>Pin ID : </label>
                <input
                  placeholder="Enter a Password"
                  type="password"
                  onChange={(event) => setPinID(event.target.value)}
                />
              </div>
            ) : (
              <div></div>
            )}
            <div className="but">
              <div className="cre">
                <div onClick={register} className="create">
                  Create Account
                </div>
                {registerorsignin ? (
                  <div className="back" onClick={notchange}>
                    <div>Go Back</div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              {registerorsignin ? (
                <div></div>
              ) : (
                <div className="buttonsignin" onClick={signin}>
                  Sign In
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
