import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface WhatsAppButtonProps {
    phoneNumber: string;
    message: string;
    fullWidth?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    phoneNumber,
    message,
    fullWidth = false
}) => {
    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <Button
            variant="contained"
            fullWidth={fullWidth}
            startIcon={<WhatsAppIcon />}
            onClick={handleClick}
            sx={{
                backgroundColor: '#25D366',  // Verde de WhatsApp
                color: 'white',
                '&:hover': {
                    backgroundColor: '#128C7E',
                },
                textTransform: 'none',
            }}
        >
            Contactar por WhatsApp
        </Button>
    );
}

export default WhatsAppButton;
