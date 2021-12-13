import './styles.css';

type Props = {
  text: string;
};

const ButtonDefault = ({ text }: Props) => {
  return (
    <button className="btn btn-primary btn-container">
        <p>{text}</p>
    </button>
  );
};

export default ButtonDefault;