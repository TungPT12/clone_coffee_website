import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const alertMessage = (msg: any) => {
  return (
    <div className="d-flex text-warning fw-500 align-items-center  ps-2 pb-2 mb-1 pt-0 ">
      <FontAwesomeIcon icon={faWarning} className="icon-warning me-2" />
      {msg}
    </div>
  );
};

export default alertMessage;
