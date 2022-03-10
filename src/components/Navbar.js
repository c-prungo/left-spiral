import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTabs = styled(
    (props) => (
        <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        />
    )
) (
    {
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 70,
            width: '100%',
            backgroundColor: 'black',
        },
    }
);

const StyledTab = styled(
    (props) => <Tab {...props} />
) (
    ({ theme }) => (
        {
            textTransform: 'none',
            fontWeight: theme.typography.fontWeightRegular,
            fontSize: theme.typography.pxToRem(15),
            marginRight: theme.spacing(1),
            color: 'black',
            paddingLeft: '2%',
            paddingRight: '2%',
            paddingTop: '20px',
            paddingBottom: '20px',
            '&.Mui-selected': {
                color: 'black',
            },
            '&.Mui-focusVisible': {
                backgroundColor: 'rgba(100, 95, 228, 0.32)',
            },
        }
    ),
);

// get data from the url
function find_link(id) {
    return id.match('/[a-zA-Z]+$');
}

function Navbar() {
    let keyValue = {
        '/': 0,
        '/about': 1,
        '/market': 2,
        '/portfolio': 3
    }

    // find id to load the active nav on page refresh
    let id = find_link(window.location.href);
    if (id !== null) {id = id[0]}
    else {id = '/'}

    // the active nav
    const [value, setValue] = React.useState(keyValue[id]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='nav'>
            <Box sx={{ width: '100%' }}>
                <StyledTabs value={value}
                onChange={handleChange}
                variant='scrollable'
                scrollButtons={false}>
                    <StyledTab label="Home" href={'/'} />
                    <StyledTab label="About Us" href={'/about'} />
                    <StyledTab label="Market" href={'/market'} />
                    <StyledTab label="Portfolio" href={'/portfolio'} />
                </StyledTabs>
            </Box>
        </div>
    );
}
export default Navbar;