import React from 'react'

const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgb(37, 39, 53)",
    padding: "25px",
    zIndex: 1000,
    border: "1px",
    borderRadius: "10px",
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
    color: "black",
    position: "fixed",
    top: "1%",
    left: "82%",
    cursor: "pointer",
    backgroundColor: "white",
    margin: "10px",
}

export default function Modal({ open, children, close }) {
    if (!open) return null
    return (
        <>
            <div style={OVERLAY_STYLE} />
            <div style={MODAL_STYLES}>
                <button style={HEADLINE} onClick={close}> X </button>
                {children}
            </div>
        </>
    )
};

