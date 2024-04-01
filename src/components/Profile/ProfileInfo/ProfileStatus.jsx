import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    edithMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      edithMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      edithMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.edithMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No Status'}</span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
