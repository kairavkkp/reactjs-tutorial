import { Box, Typograhpy} from '@material-ui/core';

const Header = () => {
    return(
        <Box width={100} height={100} display="flex" flexDirection="column" justifyContent="center">
            <Typography variant="h1" gutterBottom>
                Welcome to React JS tutorials
            </Typography>
        </Box>
    );
}

export default Header;