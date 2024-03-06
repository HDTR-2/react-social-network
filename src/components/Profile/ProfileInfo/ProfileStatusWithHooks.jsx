import React, { useState, useEffect } from 'react';
import Preloader from '../../common/Preloader/Preloader';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);

  const [status, setStatus] = useState(props.status);

  const activateMode = () => {
    setEditMode(true);
  };

  const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateMode}>{props.status || 'No Status'}</span>
        </div>
      ) : (
        <div>
          <input autoFocus onBlur={deactivateMode} onChange={onStatusChange} value={status} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
