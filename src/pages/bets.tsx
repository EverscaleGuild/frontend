import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import { Game } from '../components/Game';
import { CreateBet } from '../components/CreateBet';
import './bets.css';

import {
    Address,
    ProviderRpcClient
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

const ever = new ProviderRpcClient();


export default function ActionAreaCard() {
    const [bets, setBets] = React.useState<any[]>([]);


    const [game, setGame] = React.useState<string | null>(null);
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
    React.useEffect(() => {
        loadBets()
    }, [])

    return (
      <div>
      <CreateBet getList={loadBets}/>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: 10, gap: '20px'}}>
        {bets.map((item) => (
            <Card sx={{ maxWidth: 200 }} onClick={() => setGame('1')} className={item[1].beat ? "YesBet" : "NoBet"} key={item[0]}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="160"
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
        <Game gameHash={game} key={game} handleClose={() => setGame(null)} />
      </Box>
      </div>
    );
}
