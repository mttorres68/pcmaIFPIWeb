import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
        <h1>Oops!</h1>
        <p>Desculpa! Página não encontrada.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    );
}

export default ErrorPage;