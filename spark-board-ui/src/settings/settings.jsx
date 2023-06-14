import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState, useCallback } from "react";

import "./settings.css"


/**
 * Create the state for the settings and it's setter.
 * @param {object} defaults Default settings value.
 * @returns Settings state and setter. The setter can be called like this:
 *          setSetting("animationEnabled", true)
 */
export function useSettings(defaults) {
    const [settings, setSettings] = useState(defaults);

    // create a setter for individual configurations
    function setSetting(key, value) {
        setSettings((current) => ({...current, [key]: value}));
    }

    return [settings, setSetting];
}


/**
 * Small settings pannel.
 * @param {object} settings state as returnd by `useSettings`.
 * @param {callback} setSetting Callback that updates the `settings` state.
 * @returns Component.
 */
export function Settings({ settings, setSetting }) {
    // the settings details can be expanded or collapsed by clicking a button
    const [expanded, setExpanded] = useState(false);

    // callbacks that bind the settings to the switchs
    const setAnimation = useCallback((value) => setSetting("animationEnabled", value), [settings]);
    const setAnimationOnDrag = useCallback((value) => setSetting("animationEnabledOnDrag", value), [settings]);

    // add some background to the settings pannel
    const style = {
        backgroundColor: "rgba(128, 128, 128, 0.2)",
        borderRadius: "5px",
        padding: "10px",
    };

    return <div style={style}>
        <ToggleSettings expanded={expanded} setExpanded={setExpanded} />
        <div hidden={!expanded}>
            <ToggleSwitch label="Node animation" value={settings.animationEnabled} onChange={setAnimation} />
            <ToggleSwitch label="Node animation on drag" value={settings.animationEnabledOnDrag} onChange={setAnimationOnDrag} />
        </div>
    </div>
}


/**
 * Settings toggle button: hides or shows the settings.
 */
function ToggleSettings({ expanded, setExpanded }) {
    const style = {
        // make the close button appear on the right
        display: "flex",
        marginLeft: "auto",
        cursor: "pointer",
        flexDirection: "row-reverse",
        marginBottom: expanded ? "5px" : "0px",
    }
    return <div onClick={() => setExpanded(!expanded)} style={style}>
        <FontAwesomeIcon icon={expanded ? faClose : faCog }></FontAwesomeIcon>
    </div>
}


/**
 * A switch to represent a checkbox in a fancier way.
 * @param {string} label The label to show next to the switch.
 * @param {boolean} value The value of the switch.
 * @param {callback} onChange Callback that is called when the switch is toggled. 
 * @returns Component.
 */
function ToggleSwitch({ label, value, onChange }) {
    return <div className="toggle-switch">
        <label style={{ marginRight: "10px" }}>{label}</label>
        <label className="switch" style={{ marginLeft: "auto" }}>
            <input type="checkbox" defaultChecked={value} onClick={(event) => onChange(event.target.checked)} />
            <span className="slider round"></span>
        </label>
    </div>;
}
