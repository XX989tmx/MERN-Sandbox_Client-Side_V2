import React from 'react';

const DownloadableOrNotSelector = (props) => {
    return (
      <div>
        <label>
          downloadable
          <select
            className="selector"
            name="downloadable"
            id="downloadable"
            onChange={props.DownloadableHandler}
          >
            <option value="default" selected>
              sort
            </option>
            <option value="Downloadable">Downloadable</option>
            <option value="WebOnly">Web Only</option>
          </select>
        </label>
      </div>
    );
}

export default DownloadableOrNotSelector;
