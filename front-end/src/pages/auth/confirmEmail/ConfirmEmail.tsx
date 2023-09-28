import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ConfirmEmail = () => {
  const { token } = useParams();
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    async function confirmEmail() {
      try {
        await axios.get(`/confirm/${token}`);
        setConfirmed(true);
      } catch (error) {
        console.error(error);
      }
    }

    confirmEmail();
  }, [token]);

  return (
    <div>
      {confirmed ? (
        <p>Email confirmed. Thank you!</p>
      ) : (
        <p>Confirming email address...</p>
      )}
    </div>
  );
};

export default ConfirmEmail;
