import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export interface Chirp {
    id: number,
    content: string,
    location: string
    _created: number
}

// export interface User {

//     id: number,
//     name: string,
//     email: string,
//     password: string
// }


const Home: React.FC<IHomeProps> = props => {
    const [getChirps, setGetChirps] = useState<Chirp[]>([]);
    // const [getUsers, setGetUsers] = useState<User[]>([]);


    useEffect(() => {
        (async () => {
            try {
                const response: Response = await fetch('http://localhost:3000/api/chirps');
                const getChirps = await response.json();
                setGetChirps(getChirps);
            } catch (error) {
                console.log(`Didn't get all chirps`);
            }

            // try {
            //     const response: Response = await fetch('http://localhost:3000/api/users');
            //     const getUsers = await response.json();
            //     setGetUsers(getUsers);
            // } catch (error) {
            //     console.log(`Didn't get all users`)
            // }



        })();
    }, [])




    return (
        <>
                
            { //LOL
            /* {getUsers.map(user => (
                <div className="container">
                    <div key={`users-card-${user.id}`}>
                        <h5 className="card-header">{user.name}</h5>
                        <h5 className="card-title">{user.email}</h5>
                        <p className="card-text">{user.password}</p>
                    </div>

                </div>
            ))} */}
            {getChirps.map(chirp => (
                <div className="container">

                    <div key={`chirps-card-${chirp.id}`} className="col">
                        <div className="card">
                            <h5 className="card-header">{chirp.id}</h5>
                            <div className="card-body">
                                <h5 className="card-title">{chirp.content}</h5>
                                <p className="card-text">{chirp._created}</p>
                                <Link to={`/chirp/${chirp.id}/admin`} className="btn btn-primary mt-2">
                                    Admin Options
                                 </Link>
                            </div>
                        </div>
                    </div>
                </div>

            ))}

        </>
    );
}

export interface IHomeProps { }

export default Home;