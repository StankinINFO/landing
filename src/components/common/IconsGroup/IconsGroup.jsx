import React, {Component} from 'react'
import './IconsGroup.css'


export default class IconsGroup extends Component {

    onClickHandle = (e) => {
        const { onSelectHandle } = this.props
        onSelectHandle(e.target.id ? e.target.id : e.target.children[0].id)
    }

    render() {

        const {children, current} = this.props

        return (
            <div className="iconsGroupContainer">
                <div>
                    {React.Children.map(children, (child, i) => (
                        <div
                            className={ `groupIcon ${child.props.id === current ? 'selectedIcon' : null}` }
                            onClick={ this.onClickHandle }
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
