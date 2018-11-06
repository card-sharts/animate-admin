import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEssays } from './reducers';
import { loadEssays } from './actions';
import styles from './Essays.css';

class Essays extends PureComponent {

  static propTypes = {
    loadEssays: PropTypes.func.isRequired,
    essays: PropTypes.array
  };

  componentDidMount() {
    this.props.loadEssays();
  }

  render() { 
    const { essays } = this.props;
    return (
      <div className={styles.essays}>
        <h2>Essays</h2>
        {essays &&
          essays.map(essay => (
            <p key={essay._id}>{essay.title}</p>
          ))}
      </div>
    );
  }
}
 
export default connect(
  state => ({ essays: getEssays(state) }),
  { loadEssays }
)(Essays);