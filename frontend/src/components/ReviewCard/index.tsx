import './styles.css';

import {ReactComponent as StarImage} from '../../assets/images/star.svg';
import { Review } from '../../types/review';

type Props = {
    review: Review;
}

const ReviewCard = ({ review }: Props) => {
    return(
        <div className="review-container">
            <div className="review-content-username">
                <StarImage />
                <h2>{review.user.name}</h2>
            </div>
            <div className="review-contet-message">
                <p>{review.text}</p>
            </div>
        </div>
    );
}

export default ReviewCard;