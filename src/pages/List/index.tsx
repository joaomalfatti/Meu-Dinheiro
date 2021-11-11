import React from 'react';

import ContentHeader from '../../components/ContentsHeader'
import SelectInput from '../../components/Selectinput'

import { Container} from './style';

const List: React.FC = () => {


    const options = [
        {value: 'João', label: 'João'},
        {value: 'Maria', label: 'Maria'},
        {value: 'azazel', label: 'azazel'},
    ];


    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
}


export default List;