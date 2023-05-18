import {useParams} from 'react-router-dom';

const Snacks = () => {
    const {id} = useParams ();
    return (
        <div>Snacks</div>
    )
}

export default Snacks