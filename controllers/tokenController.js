
const getSpotifyToken = async (req, res) => {

    try {

        const request = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            body: new URLSearchParams({
                'grant_type': 'client_credentials',
                'client_id': process.env.CLIENT_ID,
                'client_secret': process.env.CLIENT_SECRET
            }),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        const response = await request.json();

        if(request.status == 200){

            res.status(200).json({
                ok: true,
                data: response
            });

        } else {

            res.status(request.status).json({
                ok: false,
                error: response
            });

        };
        
    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Oops! Something went wrong on our server. We are working to solve the problem as soon as possible. Sorry for the inconvenience.',
        });

    };

};


module.exports = { getSpotifyToken };