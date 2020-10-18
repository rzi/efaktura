import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
// import { makeStyles } from '@material-ui/core/styles';
// import DeleteIcon from "@material-ui/icons/Delete";
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
// import Icon from '@material-ui/core/Icon';
// import SaveIcon from '@material-ui/icons/Save';
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HeaderInvoice extends Component {
  render() {
    return (
      <div>
        <h4 className="text-left">
          Darmowa subskrybcja pozwala używać programu bez możliwości dodawania
          /odczytywania bazy dostawców i kontrahentów. Supskrybcja płatna na
          jeden rok w cenie 50 zl pozwala na odblokowanie wszystkich
          funkcjonalności.
        </h4>
        <h4 className="text-left">
          Aby kupić subskrypcje naciscnij koszyk{" "}
          <button class="btn btn-primary">
            <i class="fa fa-cart-plus" aria-hidden="true"></i>
          </button>{" "}
        </h4>
      </div>
    );
  }
}
export default HeaderInvoice;
