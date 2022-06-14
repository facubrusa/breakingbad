import { useState, useEffect } from 'react';
import Card from './Card';

const MainPage = () => {

    const [data, setData] = useState([]);
    const [search, setSeach] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://www.breakingbadapi.com/api/characters");
            const json = await response.json();
            setData(json);
            setLoading(true);
        }
        fetchData();
    }, []);

    let filter = [];
    if(data.length > 0) {
        filter = data.filter(character => character.name.toLowerCase().includes(search.toLowerCase()));
    }

    return (
        <>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Walter White" 
                onChange={(e) => setSeach(e.target.value)}
            />
            <div className="row mt-3">
                { filter.length > 0 ? (
                    <div className="row mt-3">
                    { filter && filter.map((item, index) => (
                        <div className="col-xs-12 col-md-4 col-lg-3" key={index}>
                            <Card 
                                character={item}
                            />
                        </div>
                    ))}
                </div>
                ) : (
                    loading ? <h4>There are any character with this name :c</h4> : null
                )}
            </div>
        </>
    );
}
 
export default MainPage;