import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import counterActions         from 'actions/counter';

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
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
        <h1></h1>
        <h2>点了我 次数: {this.props.counter}</h2>
        <button className='btn btn-default'
                onClick={this.props.actions.increment}>
          疯狂点击
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
