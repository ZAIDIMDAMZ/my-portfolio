import Card from 'react-bootstrap/Card';
import './Card.css';

interface MyCardProps {
    title: string;
    subTitle: string;
    text: string;
    imageUrl?: string;
    size: string;
}

const MyCard: React.FC<MyCardProps> = ({ title, subTitle, text, imageUrl, size }) => {
    return (
        <Card
            style={{
                height: size,
            }}
        >
            <Card.Img className='card-image' variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{subTitle}</Card.Subtitle><br />
                <Card.Text className='cadr-text'>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MyCard;