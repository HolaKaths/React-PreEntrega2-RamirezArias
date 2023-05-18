import {useParams} from 'react-router-dom';

const Alimentos = () => {
    const {id} = useParams ();
    return (
        <div>Alimentos</div>
    )
}

export default Alimentos