import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    edithMode: false,
  };

  activateEdithMode = () => {
    this.setState({
      edithMode: true,
    });
  };
  deactivateEdithMode = () => {
    this.setState({
      edithMode: false,
    });
  };

  render() {
    return (
      <div>
        {!this.state.edithMode ? (
          <div>
            <span onDoubleClick={this.activateEdithMode}>{this.props.status}</span>
          </div>
        ) : (
          <div>
            <input autoFocus onBlur={this.deactivateEdithMode} value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
