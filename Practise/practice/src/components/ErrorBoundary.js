import {Component} from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {hasError : false};
    }

    static getDerivedStateFromError(error){
        return{hasError:true}
    }
    componentDidCatch(error,errorinfo){
        console.log("Error caught",error,errorinfo)
    }
    render(){
        if(this.state.hasError)
        {
            return <h1>Something went wrong</h1>
        }
        return this.props.children    
    }
}
ErrorBoundary.propTypes = {
    children : PropTypes.node.isRequired
}
export default ErrorBoundary