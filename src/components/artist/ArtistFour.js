import React from 'react';
import "../../assets/styles/artist/artistfour.css";

const ArtistFour = () => {
  return (
    <div className="artistfour-container">
    {/* Left Section */}
    <div className="artistfour-left">
      <h2>
        Start a Qrates page,<br />
        confirm and pay for production costs.<br />
        Pay up front? Crowdfunding?
      </h2>
      <h4>
        Pay for the production of your product in advance and start<br/>
         production immediately, or choose the crowdfunding option<br/>
          and press as many copies you like with pledges you collect<br/>
           from your fans.
      </h4>
      <h3>Qrates page and Artist page</h3>
      <h4>
        The Qrates page is your storefront on Qrates to sell your<br/>
         music. The Artist page is your profile page. Upload your<br/>
          images to the template provided and fill in the form to set it<br/>
           up.
      </h4>
    </div>

    {/* Right Section */}
    <div className="artistfour-right">
      <h2>We support a wide range of artists' needs</h2>
      <h3>Small production minimums</h3>
      <h4>
        Vinyl records can be made from 100 copies, and cassette<br/>
         tapes from 50 copies.
      </h4>
      <h3>Select the payment option</h3>
      <h4>
        You can pay for the production of your product in advance <br/>
        and begin the production process immediately. We also have a <br/>
        pre-order function, which allows you to take orders during<br/>
         production until completion, and the crowdfunding method,<br/>
          which allows you to collect orders in advance and then begin<br/>
           the manufacturing process. If you don't want to pay for the<br/>
            production costs upfront, or if you want to collect orders from<br/>
             your fans before deciding on the final number of pieces to be<br/>
              produced, try crowdfunding. No risk, no waste.
      </h4>
      <h3>Easily customizable your Qrates page and artist page</h3>
      <h4>
        Qrates provides easy-to-setup templates for the Qrates page<br/>
         and the artist profile page. The Qrates page for selling your<br/>
          music can be set up to include audio samples, embedded<br/>
           videos, and comments from fans, making it a great promotional<br/>
            tool.
      </h4>
    </div>
  </div>
  );
}

export default ArtistFour;
