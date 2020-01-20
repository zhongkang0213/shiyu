import './index.scss';
import React, {Component}  from 'react'
import PropTypes from 'prop-types'

export default class BasicWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        wrapperStyle: PropTypes.object
    }

    
    render() {
        let wrapperStyle = Object.assign({
            width: this.props.width + 'px',
            height: this.props.height + 'px'
        }, this.props.wrapperStyle)
        return (
            <div className="basic-wrapper" style={wrapperStyle}>
                { this.props.children }
            </div>
        );
    }
}