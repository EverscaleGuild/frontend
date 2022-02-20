import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Fab } from '@mui/material';
import { Game } from '../components/Game';
import AddIcon from '@mui/icons-material/Add';
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

const ever = new ProviderRpcClient();

export default function ActionAreaCard() {
    const [bets, setBets] = React.useState<any[]>([]);

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
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: 5, gap: 3 }}>
            {bets.map((item) => (
                <Card sx={{ maxWidth: 200 }} onClick={() => setGame('1')}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={`https://avatars.dicebear.com/api/male/${item[1].hash}.svg?background=%230000ff`}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {Math.floor(item[1].amount / Math.pow(10, 9))} Ever
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
            <Game game={game} key={game} handleClose={() => setGame(null)} />
            <Fab sx={{ position: 'fixed', right: 30, bottom: 30 }} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Box>

    );
}
