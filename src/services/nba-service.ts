export const getNbaMatches = async () => {
    const url = 'https://api-nba-v1.p.rapidapi.com/games?live=all';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '35cec9dbc3msh5793246bc58b3c6p1bcc3ejsnbb63fcaabf35',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}