import React, { useRef, useState } from "react";
import Popup from "./Popup";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectAbout, setProjectAbout] = useState("");
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    onClose();
  };

  const handleSend = () => {
    if (!name.trim()) {
      setInvalidName(true);
      return;
    } else {
      setInvalidName(false);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setInvalidEmail(true);
      return;
    } else {
      setInvalidEmail(false);
    }

    handleOpenPopup();
    setName("");
    setEmail("");
    setProjectAbout("");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      <div className="modal-content" ref={modalRef}>
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <h2>Get Template</h2>
        <form className="modalForm">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className={`errorName ${invalidName ? "show" : ""}`}>
              Name is required
            </span>
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={`errorEmail ${invalidEmail ? "show" : ""}`}>
              Invalid email
            </span>
          </label>
          <br />
          <label>
            <div className="projectAboutBlock">
              What is your project about?
              <textarea
                rows={4}
                value={projectAbout}
                onChange={(e) => setProjectAbout(e.target.value)}
                className="textAreaProject"
              />
            </div>
          </label>
          <br />
          <button type="button" onClick={handleSend} className="modalBtn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
