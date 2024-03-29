import React, { useState } from "react";
import "./Controller.css";
const Controller = () => {
  const [control, setControl] = useState("");
  const [degree, setDegree] = useState("45");
  const [brightness, setBrightness] = useState("50");
  const [primaryIntensity, setPrimaryIntensity] = useState("100");
  const [secIntensity, setSecIntensity] = useState("20");
  const [primaryColor, setPrimaryColor] = useState("#ff0000");
  const [secColor, setSecColor] = useState("#006eff");
  const [mode, setMode] = useState("Gradient");
  const [active, setActive] = useState(true)
  return (
    <div>
      <header className={active ? 'active' : ''}>
        <h3>SoftLight</h3>
        <p>Designed By Ferrous Designer</p>
      </header>
      <div className="softlight-back" />
      <div
        className="softlight-front"
        onClick={() => setActive(!active)}
        style={{ opacity: brightness / 100 }}
      />
      <div className={"softlight-light-panel "}>
        <div
          className="primary"
          style={{
            backgroundImage:
              mode === "Gradient"
                ? `linear-gradient(${degree}deg, ${primaryColor}, ${secColor})`
                : `linear-gradient(${degree}deg, ${primaryColor}, ${primaryColor})`,
            // backgroundColor: primaryColor,
            width: mode === "Dual" ? "50%" : "100%",
            opacity: primaryIntensity / 100,
          }}
        />
        {mode === "Dual" && (
          <div
            className="secondary"
            style={{ backgroundColor: secColor, opacity: secIntensity / 100 }}
          />
        )}
      </div>
      <div className={"softlight-controller " + (active ? "active" : "")}>
        {!control && (
          <div>
            <button
              className="softlight-button"
              onClick={() => setControl("intensity")}
            >
              <i className="fas fa-adjust"></i>{" "}
            </button>
            <button
              className="softlight-button"
              onClick={() => setControl("brightness")}
            >
              <i className="fas fa-sun" />
            </button>
            {mode === "Gradient" && (
              <button
                className="softlight-button"
                onClick={() => setControl("degree")}
              >
                <i className="fas fa-sync" />
              </button>
            )}
            <button
              className="softlight-button"
              style={{ marginRight: 10 }}
              onClick={() => setMode(mode === "Mono" ? "Gradient" : "Mono")}
            >
              Mode: {mode}
            </button>
            <input
              style={{ marginRight: "10px" }}
              type="color"
              onChange={({ target: { value } }) => setPrimaryColor(value)}
              value={primaryColor}
            ></input>{" "}
            {mode !== "Mono" && (
              <input
                type="color"
                onChange={({ target: { value } }) => setSecColor(value)}
                value={secColor}
              ></input>
            )}
          </div>
        )}
        {control === "brightness" && (
          <div className="softlight-slider">
            <div>
              <input
                onChange={({ target: { value } }) => setBrightness(value)}
                type="range"
                min="1"
                max="100"
                value={brightness}
                class="slider"
              />
            </div>
            <i className="fas fa-times-circle" onClick={() => setControl()} />
          </div>
        )}
        {control === "intensity" && (
          <div className="softlight-slider">
            <div>
              <input
                onChange={({ target: { value } }) => setPrimaryIntensity(value)}
                type="range"
                min="1"
                max="100"
                value={primaryIntensity}
                class="slider"
              />
              {mode === "Dual" && (
                <input
                  onChange={({ target: { value } }) => setSecIntensity(value)}
                  type="range"
                  min="1"
                  max="100"
                  value={secIntensity}
                  class="slider"
                />
              )}
            </div>
            <i className="fas fa-times-circle" onClick={() => setControl()} />
          </div>
        )}
        {control === "degree" && (
          <div className="softlight-slider">
            <div>
              <input
                onChange={({ target: { value } }) => setDegree(value)}
                type="range"
                min="0"
                max="360"
                value={degree}
                class="slider"
              />
            </div>
            <i className="fas fa-times-circle" onClick={() => setControl()} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Controller;
