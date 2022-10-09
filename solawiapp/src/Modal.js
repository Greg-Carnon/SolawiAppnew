import React from 'react'

const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#607178",
    padding: "50px",
    zIndex: 1000,
}

const OVERLAY_STYLE = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .7)",
    zIndex: 1000,
}

const HEADLINE = {
    color: "white",
    position: "fixed",
    top: "5%",
    left: "75%",
    cursor: "pointer",
    backgroundColor: "#443532",
}

export default function Modal({ open, children, close }) {
    if (!open) return null
    return (
        <>
            <div style={OVERLAY_STYLE} />
            <div style={MODAL_STYLES}>
                <button style={HEADLINE} onClick={close}>SCHLIESSEN</button>
                {children}
            </div>
        </>
    )
};

