import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { CustomerDto } from './dtos/CustomerDto';

/**
 * Function to create a customer
 * @param event 
 * @return APIGatewayProxyResult
 */
export const createHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult;
    try {
        const customer: CustomerDto = event.body ? JSON.parse(event.body) : null;
        response = {
            statusCode: 201,
            body: JSON.stringify(customer),
        };
    } catch (err: unknown) {
        console.log(err);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                message: err instanceof Error ? err.message : 'some error happened',
            }),
        };
    }

    return response;
};