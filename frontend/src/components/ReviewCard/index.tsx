import './styles.css';

import {ReactComponent as StarImage} from '../../assets/images/star.svg';

const ReviewCard = () => {
    return(
        <div className="review-container">
            <div className="review-content-username">
                <StarImage />
                <h2>Maria Silva</h2>
            </div>
            <div className="review-contet-message">
                <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
            </div>
        </div>
    );
}

export default ReviewCard;