import React from 'react';
import { useParams } from 'react-router-dom';

type MatchParams = {
    touristRouteId: string,
    other: string
}

export const DetailPage: React.FC = (props) => {
    var params = useParams<MatchParams>();
    return <h1>旅游线路详情页面, 旅游路线ID: {params.touristRouteId} {params.other}</h1>
}