import styles from "../../assets/ColorPicker.module.css";
import React, { useState } from "react";

function ColorPicker() {
    const [colorOfBox, setcolorOfBox] = useState("#000000");
    const updateBoxColor = (event) => {
        setcolorOfBox(event.target.value);
    };
    const resetColor = () => {
        setcolorOfBox("#000000");
    };
    return (
        <>
            <p className={styles.header}>Color Picker</p>
            <div
                className={styles.colorBox}
                style={{ backgroundColor: colorOfBox }}
                id="Box"
            >
                <div className={styles.innerBox}> {colorOfBox} </div>
            </div>
            <div className={styles.controls}>
                <label className={styles.selectColorLabel}>Select Color:</label>{" "}
                <br />
                <input
                    type="color"
                    value={colorOfBox}
                    onChange={updateBoxColor}
                />
                <br />
                <button className={styles.btn} onClick={resetColor}>
                    {" "}
                    Reset
                </button>
            </div>
        </>
    );
}
export default ColorPicker;
