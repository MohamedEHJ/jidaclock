import React, { Component } from 'react'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false, // initial state of the popup
    };
  }

  handleButtonClick = () => {
    // Function to handle button click event
    this.setState({ isPopupOpen: true });
  };

  handleClosePopup = () => {
    // Function to handle closing of the popup
    this.setState({ isPopupOpen: false });
  };

  render() {
    const { isPopupOpen } = this.state;
    return (
      <nav className="flex items-center justify-between bg-transparent py-3 px-6 border-b border-white">
        <div className="text-white text-2xl font-bold">JIDA CLOCK</div>
        <button
          className="flex items-center justify-center text-white bg-red-500 rounded-full py-2 px-4"
          onClick={this.handleButtonClick}
        >
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.471 6h3l-1 8h-1l-1-8zm1.5 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"
            />
          </svg>
          <span>
            BESOIN D&apos;AIDE: <span className="font-bold">06.72.82.98.77</span>
          </span>
        </button>

        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div className="absolute bg-white text-black rounded-md p-4">
              <div className="text-xl font-semibold mb-2">Signaler un problème</div>
              <ul>
                <li>Envoyez-moi un message WhatsApp au : <p className='font-bold'>06 72 82 98 70</p> avec si possible une photo de l&apos;écran.</li>
              </ul>
              <button className="mt-4 text-white bg-red-500 py-2 px-4 rounded-md" onClick={this.handleClosePopup}>
                OK
              </button>
            </div>
          </div>
        )}
      </nav>
    );
  }
}
