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

const ever = new ProviderRpcClient();
const dePoolAddress = new Address('0:ebd9085679adb983930b991814f02d497b902c87a9b240c6ede49008aca12a1f');
const dePool: any = ever.createContract(GameContract.abi, dePoolAddress);


export default function ActionAreaCard() {
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

            const selectedAddress = accountInteraction.address;

            const transaction = await dePool
                .methods.
                listBet({
                    stake: '10000000000',
                }).send({
                    from: selectedAddress,
                    amount: '10500000000',
                    bounce: true,
                });
            console.log(transaction);
        }
        loadBets()
    }, [])
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: 5, gap: 3 }}>
            <Card sx={{ maxWidth: 200 }} onClick={() => setGame('1')}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`https://avatars.dicebear.com/api/male/john1.svg?background=%230000ff`}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            150 Ever
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Game game={game} key={game} handleClose={() => setGame(null)} />
            <Fab sx={{ position: 'fixed', right: 30, bottom: 30 }} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Box>

    );
}