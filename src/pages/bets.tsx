import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Fab } from '@mui/material';
import { Game } from '../components/Game';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './bets.css';

import {
    Address,
    ProviderRpcClient,
    TvmException
} from 'everscale-inpage-provider';
import { GameContract } from '../components/GameContract';
import { abi, addr } from '../Contract';

function contractAddress(network: string, name = "App"): Address {
    // @ts-ignore
    return new Address(addr[network][name])
}

async function Contract() {
    const providerState = await ever.getProviderState();
    const address = contractAddress(providerState.selectedConnection);
    return new ever.Contract(abi, address);
}

const names = [
"EVER",
"USDT"]

const ever = new ProviderRpcClient();

// modal
const m_style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  length: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function ActionAreaCard() {
    const [bets, setBets] = React.useState<any[]>([]);
    // modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [game, setGame] = React.useState<string | null>(null);
    React.useEffect(() => {
        const loadBets = async () => {
            await ever.ensureInitialized();

            const { accountInteraction } = await ever.requestPermissions({
                permissions: ['basic', 'accountInteraction'],
            });
            if (accountInteraction == null) {
                throw new Error('Insufficient permissions');
            }
            const response = await (await Contract()).methods.listBet({}).call();
            console.log(response);
            setBets(response.listBet);
        }
        loadBets()
    }, [])
    var back_color:string  = "39f491";

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: 15, gap: 20,position: 'absolute', top: 180}}>
            {bets.map((item) => (
                <Card sx={{ maxWidth: 200 }} onClick={() => setGame('1')} className={item[1].beat ? "YesBet" : "NoBet"} key={item[0]}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={`https://avatars.dicebear.com/api/identicon/${item[1].hash}.svg?background=%23${item[1].beat ? "39f491" : "FF6922"}`}
                            alt="green iguan"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {Math.floor(item[1].amount / Math.pow(10, 9))} Ever coins
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
            <Game game={game} key={game} handleClose={() => setGame(null)} />
            <Fab sx={{ position: 'fixed', right: 30, bottom: 30 }} onClick={handleOpen} color="primary" aria-label="add">
                <AddIcon />
            </Fab>

      <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={m_style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Choose the Coin
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={names}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="Coin" />}
          />
          </Typography>
        </Box>
      </Modal>
    </div>


        </Box>




    );
}
