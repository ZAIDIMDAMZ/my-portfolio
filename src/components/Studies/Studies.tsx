
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import studies from '../../const/studies.json';
import MyCard from '../ui/card/Card';
import Title from '../ui/title/Title';
import './Studies.css';
function Studies() {
    return (
        <section id="studies" className='studies-section'>
            <div className="container">
                <Title title='Studies' />
                <Row xs={1} md={studies.length} className="g-4">
                    {studies.map((_, idx) => (
                        <Col key={idx}>
                            <MyCard
                                title={_.title}
                                subTitle={_.subTitle}
                                text={_.text}
                                imageUrl={_.imageUrl}
                                size='350px'
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
}

export default Studies;