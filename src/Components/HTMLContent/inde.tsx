import { Box } from '@mui/material';
import DOMPurify from 'dompurify';

interface HTMLContentProps {
    html: string;
}

const HTMLContent: React.FC<HTMLContentProps> = ({ html }) => {
    const sanitizedHTML = DOMPurify.sanitize(html);
    
    return (
        <Box 
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
            style={{
                lineHeight: '1.6',
            }}
            className='text-zinc-700 flex flex-col gap-2'
            sx={{
                '& p': { 
                    margin: 0,
                    fontSize:15,
                },
                '& ul, & ol': {
                    display:'flex',
                    flexDirection:'column',
                    gap:1,
                    listStyle:'initial', 
                    paddingLeft: '24px',
                    margin: 0
                },
                '& strong': { 
                    fontWeight: 'bold'
                },
                '& li': {
                    paddingBottom:0
                }
            }}
        />
    );
}

export default HTMLContent;
