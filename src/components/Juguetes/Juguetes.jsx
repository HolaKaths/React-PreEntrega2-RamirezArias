import {useParams} from 'react-router-dom';

const Juguetes = () => {
    const {id} = useParams ();
    return (
        <div>Juguetes</div>
    )
}

export default Juguetes