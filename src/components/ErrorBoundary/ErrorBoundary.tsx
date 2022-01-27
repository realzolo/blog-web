import React, {ErrorInfo} from "react";

interface IState {
    hasError: boolean,
    errorInfo: string | null
}

class ErrorBoundary extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {hasError: false, errorInfo: null};
    }

    // 生命周期函数,一旦子组件出粗,就会调用此函数
    static getDerivedStateFromError(error: Error) {
        console.log(error)
        // Update state so the next render will show the fallback UI.
        return {hasError: true, errorInfo: error.message};
    }

    // 异常捕获,可用于日志记录等
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // this.setState({hasError: true, errorInfo: errorInfo.componentStack});
    }

    render() {
        const {hasError, errorInfo} = this.state;
        if (hasError) {
            return (
                <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                    <h1>{errorInfo}</h1>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;