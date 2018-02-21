import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
<h1>INFO</h1>
<p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This info is PRIVATE Bitch! </p>}
    <WrappedComponent {...props} />
        </div>
    )
};



const AdminInfo = withAdminWarning(Info);


ReactDOM.render(<AdminInfo info="There are the details" />, document.getElementById('app'));