import React from 'react';
import Layouts from './Layouts';
import Container from './Container';
import { DefaultTable, DefaultTextBox, DefaultTablehr} from "~components/Container";
import { Collapse, Select, Text, TextEditor, TextAreas, Button} from "~components/Presentational";

const Main = () => {

    return (
        <Layouts>
            <Container>
                <DefaultTextBox/>
                <DefaultTable sizeProps='small' />
                <TextEditor/>
                <br/>
                <DefaultTablehr/>
                <TextAreas />
            </Container>
        </Layouts>

    );
};

export default Main;
