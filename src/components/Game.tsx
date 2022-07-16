import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { Stone } from './hands/Stone'
import { Paper } from './hands/Paper'
import { Scissors } from './hands/Scissors'
import { Secret } from './hands/Secret'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '80vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

interface IGameProps {
    gameHash: string | null;
    handleClose: () => void;
}

export const Game: React.FC<IGameProps> = (props) => {
    const { gameHash, handleClose } = props;
    const [secret, setSecret] = React.useState<boolean | null>(null)
    const [choosed, setChoosed] = React.useState<string | null>(null)
    const handleChoose = (hand: string) => {
        setChoosed(hand);
        setSecret(true);
    }
    const isShowStone = choosed === null || choosed === 'stone';
    const isShowPaper = choosed === null || choosed === 'paper';
    const isShowScissors = choosed === null || choosed === 'scissors';

    const hands = [Stone, Paper, Scissors];
    const RandomHand = () => <img src={`${process.env.PUBLIC_URL}/timer.gif`} width='90%'/>;

    return (
        <Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={!!gameHash}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={!!gameHash}>
                    <Box sx={style}>
                        <Box sx={{ position: 'absolute', bottom: 30, left: 100, transform: 'rotate(20deg)' }} >
                            {isShowStone && <Stone style={{ fill: 'antiquewhite' }} onClick={() => handleChoose('stone')} />}
                        </Box>
                        <Box sx={{ position: 'absolute', bottom: 30, right: 100, transform: 'rotate(-20deg)' }}>
                            {isShowPaper && <Paper style={{ fill: 'antiquewhite' }} onClick={() => handleChoose('paper')} />}
                        </Box>
                        <Box sx={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)' }}>
                            {isShowScissors && <Scissors style={{ fill: 'antiquewhite' }} onClick={() => handleChoose('scissors')} />}
                        </Box>
                        <Box sx={{ position: 'absolute', top: 30, left: '50%', transform: 'translateX(-50%)' }}>
                            {!secret ?
                                <Secret style={{ fill: 'antiquewhite' }} /> :
                                <RandomHand />
                            }
                        </Box>
                        {/* <Box sx={{ position: 'absolute', top: 50, left: 200, transform: 'translateX(-50%)' }}>
                            <img src="https://mui.com/static/images/cards/contemplative-reptile.jpg" height={140} alt="nft" />
                        </Box>
                        <Box sx={{ position: 'absolute', top: 200, left: 200, transform: 'translateX(-50%)' }}>
                            <Typography
                                variant="h2"
                            >
                                200 ₽
                            </Typography>
                        </Box> */}
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}
