import {useParams} from 'react-router-dom';

const Suplementos = () => {
    const {id} = useParams ();
    return (
        <div>Suplementos</div>
    )
}

export default Suplementos