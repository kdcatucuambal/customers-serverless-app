import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { CustomerDto } from './dtos/CustomerDto';

/**
 * Function to get a customer by id
 */

export const getByIdHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult;
    try {
        const customerId = event.pathParameters!.id;
        const customer: CustomerDto = {
            id: customerId ? customerId : '',
            name: 'John',
            lastName: 'Doe',
            email: 'john@doe.com',
            postalCode: 12345,
            active: true,
            index: 1001,
        }

        response = {
            statusCode: 200,
            body: JSON.stringify(
                customer
            ),
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

