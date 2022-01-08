import './styles.css';

import {ReactComponent as StarImage} from '../../assets/images/star.svg';
import { Review } from '../../types/review';

type Props = {
    review: Review;
}

const ReviewCard = ({ review }: Props) => {

    return(
        <div className="review-card-container">
            <div className="review-card-content-username">
                <StarImage />
                <h2>{review.user.name}</h2>
            </div>
            <div className="review-card-content-message">
                <p>{review.text}</p>
            </div>
        </div>
    );
}

export default ReviewCard;