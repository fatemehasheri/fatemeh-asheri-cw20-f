import PropTypes from "prop-types";
import WithFetching from './withFetching'
import Hok from "./Hok";
const Comment = ({ data}) => {
  return (
    <div>
      <h4>Comment</h4>
        <div>
          <p className="comment">{data.body}</p>
          <div>
            <span className="by">Commented By:</span>
            <span className="name">{data.name}</span>
          </div>
        </div>
    </div>
  );
};
export default WithFetching(Hok(Comment));

Comment.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
  
};
