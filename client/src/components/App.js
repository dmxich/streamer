import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamCreate from '../components/Streams/StreamCreate';
import StreamShow from '../components/Streams/SteamShow';
import StreamDelete from '../components/Streams/StreamDelete';
import StreamEdit from '../components/Streams/StreamEdit';
import StreamList from '../components/Streams/StreamList';
import Header from './Header';

/*
const PageOne = () =>{
    return (
        <div>
            Page One Good Solution
            <br/>
            <Link to="/pagetwo">Go to page two</Link>
        </div>
    );
};

const PageTwo = () =>{
    return (
        <div>
            <h1>I am on the second page</h1>
            <br/>
            <Link to = "/" > Go to the first page</Link>
        </div>
    );
};
*/

const App = () => {

    return (
        <div className="ui container">
            
            <BrowserRouter>
                
                <div className="ui header">
                    <Header />
                </div>
                <Route path="/" exact component={StreamList} /> 
                <Route path="/stream/new" component={StreamCreate} />
                <Route path="/stream/edit" component={StreamEdit} />
                <Route path="/stream/delete" component={StreamDelete} />
                <Route path="/stream/show" component={StreamShow} />
                    
                
                    
            </BrowserRouter> 
        </div>
    );
};

export default App;