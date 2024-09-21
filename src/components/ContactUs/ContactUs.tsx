import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Title from '../ui/title/Title';
// Si vous utilisez EmailJS, importez-le
import emailjs from 'emailjs-com';

function ContactUs() {
    // États locaux pour capturer les valeurs du formulaire
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Gestionnaire de soumission du formulaire
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Paramètres EmailJS (remplacez par vos propres paramètres)
        const serviceID = process.env.REACT_APP_MAIL_SERVICE_ID || '';
        const templateID = process.env.REACT_APP_MAIL_TEMPLATE_ID || '';
        const userID = process.env.REACT_APP_MAIL_USER_ID || '';

        // Paramètres pour l'envoi de l'e-mail
        const templateParams = {
            from_name: email,
            to_name: 'Mohand Ameziane ZAIDI',
            subject: subject,
            message: message,
        };

        // Utiliser EmailJS pour envoyer l'e-mail
        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('E-mail envoyé avec succès!', response.status, response.text);
                // Réinitialiser le formulaire
                setEmail('');
                setSubject('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Échec de l\'envoi de l\'e-mail:', error);
            });
    };

    return (
        <section id="contact" className='contact-section'>
            <div className="container">
                <Title title='Contact me' />
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Your Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSubject">
                        <Form.Label>Your subject</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Email subject !"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Your message text</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </div>
        </section>
    );
}

export default ContactUs;
