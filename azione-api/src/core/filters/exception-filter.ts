import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { response, request } from 'express';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    
    catch(exception: any, host: ArgumentsHost) {
        
        const context = host.switchToHttp();
        const req = context.getRequest();
        const res = context.getResponse();

        const status = exception.getStatus();

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: exception.message
        });
    }
}