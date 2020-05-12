import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component{
    

    componentDidMount(){
        this.props.fetchStreams();
    };

    renderListStreams(){
        
        return (
            this.props.stream.map((str) => {
                
                return (
                    <div className="item" key={str.id}>
                        <i className="large middle aligned icon camera" />
                        <div className="content">
                            {str.title}
                            <div className="desciption">
                                {str.description}
                            </div>
                        </div>
                    </div>
                );
            })
        );
    };

    render(){
        //console.log(this.props.stream);
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list" >
                    {this.renderListStreams()}
                </div>
                
            </div>
        );
    };
     /*
    render(){
        console.log(this.props.stream);
        return (
            <div>
                List of streams
            </div>
        );
    };*/
};






let mapStateToPops = (state) =>{
    return {
        stream: Object.values(state.stream)
    };
    
};

export default connect(mapStateToPops, {fetchStreams})(StreamList);