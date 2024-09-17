
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import experiences from '../../const/experiences.json';
import MyCard from '../ui/card/Card';
import Title from '../ui/title/Title';
import './Experience.css';
function Experiences() {
    return (
        <section id="experience" className='experiences-section'>
            <div className="container">
                <Title title='Experiences' />
                <Row xs={1} md={experiences.length} className="g-4">
                    {experiences.map((_, idx) => (
                        <Col key={idx}>
                            <MyCard
                                title={_.title}
                                subTitle={_.subTitle}
                                text={_.text}
                                imageUrl={_.imageUrl}
                                size='700px'
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
}

export default Experiences;