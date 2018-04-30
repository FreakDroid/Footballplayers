import React from 'react';
import FootballPlayerList from './FootballPlayerList';
import * as footballPlayers from '../../actions/playersActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as selectors from './FootballPlayerSelectors';
import FootballPlayerSearchForm from './FootballPlayerSearchForm';

class FootballPlayerPage extends React.Component {

    ///Class constructor
    constructor(props, context) {
        super(props, context);

        this.search = this.search.bind(this);
    }

    //Method to search Players
    search(e) {
        e.preventDefault();
        let { name, position, age } = e.target;
        this.props.actions.loadFilters({ name: name.value, position: position.value, age: age.value });
    }

    render() {
        const players = this.props.players;
        return (
            <div className="container">

                <div id="container" className="container">
                    <div className="row">
                        <div className="col-sm-10 offset-sm-1 text-center">
                            <h1>Football Player Finder</h1>
                            <div className="info-form">
                                <FootballPlayerSearchForm submitFunction={this.search} />
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {players ? <FootballPlayerList footballPlayers={players} /> : <div>No content</div>}
                </div>
            </div>
        );

    }
}

const makeMapStateToProps = () => {
    const getFootballPlayerData = selectors.getFootballPlayerData();
    const mapStateToProps = (state, props) => {
        return {
            players: getFootballPlayerData(state, props)
        };
    };
    return mapStateToProps;
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(footballPlayers, dispatch)
    };
}

export default connect(makeMapStateToProps, mapDispatchToProps)(FootballPlayerPage);