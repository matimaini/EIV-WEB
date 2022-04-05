import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation'

export const ButtonComponent = ({type, name, text, htmlFor, inputFile, icon, change}) => {
    let IconComponent = <></>;

    switch(icon) {
        case 'add':
            IconComponent = AddIcon;
            break;
        case 'nav':
            IconComponent = NavigationIcon;
            break;
        default:
            IconComponent = <></>;
            break;
    }
    return (
        <label align="center" htmlFor={htmlFor}>
            {inputFile ? <input onChange={(e) => change(e)} type="file" id={htmlFor} style={{ display: 'none' }}></input> : ''}
            <Fab 
                color="black"
                variant="extended"
                href={name}
                aria-label="add"
                type={type ? 'submit': ''}
                elementtype='file'
                component={type? 'button': 'span'}
                sx={{ m: 2, minWidth:"200px" }} >
                <IconComponent />
                {text}
            </Fab>
        </label>
    )
}