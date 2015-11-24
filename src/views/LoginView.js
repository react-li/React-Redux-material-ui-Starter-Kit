import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import counterActions         from 'actions/counter';
const TextField = require('material-ui/lib/text-field');
const Colors = require('material-ui/lib/styles/colors');
const RaisedButton = require('material-ui/lib/raised-button');

const mapStateToProps = (state) => ({
  counter : state.counter,
  routerState : state.router
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(counterActions, dispatch)
});
export class HomeView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    counter  : React.PropTypes.number
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>登录</h1>
        <TextField
            hintText="用户名"
            lib underlineFocusStyle={{borderColor: '#666'}} />
            <br />
         <TextField
            hintText="密码"
            lib underlineFocusStyle={{borderColor: '#666'}} />
            <br />
            <RaisedButton label="登录" primary={true}  backgroundColor="#999"/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
