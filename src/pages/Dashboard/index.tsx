import React from 'react';

import ContentHeader from '../../components/ContentsHeader';
import SelectInput from '../../components/Selectinput';



import {Container} from './styled';

const Dashboard: React.FC = () => {
    
    const options = [
        {value: 'João', label: 'João'},
        {value: 'Maria', label: 'Maria'},
        {value: 'azazel', label: 'azazel'},
    ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
}


export default Dashboard;