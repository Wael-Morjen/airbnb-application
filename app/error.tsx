'use client';

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorStateProps {
    error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({
    error
}) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
       <EmptyState
            title="Error"
            subtitle="An error has occurred. Please try again later."
       />
    );
}
 
export default ErrorState;